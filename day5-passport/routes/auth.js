var express = require('express');
var router = express.Router();

var User = require("../models/user");

var authMiddleware = require("../middlewares/auth");


var passport = require('passport');
var passportLocal = require('passport-local');
var passportLocalStrategy = passportLocal.Strategy;

// 1. authenticate = User.authenticate
// 2. serialize ( user => user._id )
// 3. deserialize ( userId => user )


passport.use(new passportLocalStrategy(User.authenticate()));

passport.serializeUser(User.serialize());
passport.deserializeUser(User.deserialize());


router.route("/login/")
    .get(function(req ,res) {
        return res.render("auth/login");    
    })
    .post(
        passport.authenticate("local"),

        function(req, res, next) {
            return res.redirect("/");
        }
    ); 


router.route("/signup/")
    .get( function(req, res) {
        return res.render("auth/signup");
    })
    .post(function(req, res) {
        var user = new User({
            username: req.body.username,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            password: req.body.password
        });

        user.save(function(error, user) {
            req.flash("succes", "회원가입 성공!");
            return res.redirect("/");
        });
    });


router.get("/profile/", authMiddleware.loginRequired, function(req, res) {
    return res.render("auth/profile");
});


router.get("/logout/", function(req, res) {

});


module.exports = router;
