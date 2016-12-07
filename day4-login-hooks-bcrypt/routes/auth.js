var express = require('express');
var router = express.Router();

var User = require("../models/user");


router.get("/login/", function(req ,res) {
    // login form rendering
    return res.render("auth/login");
});


router.post("/login/", function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.authenticate(username, password, function(error, user) {
        if (error) return next(error);

        if (user) {
            console.log("User 로그인 성공 !!");
            return res.redirect("/");
        }
    });
});


router.get("/signup/", function(req, res) {
    // signup form rendering
    return res.render("auth/signup");
});


router.post("/signup/", function(req, res) {
   var user = new User({
       username: req.body.username,
       email: req.body.email,
       phonenumber: req.body.phonenumber,
       password: req.body.password
   });

   user.save(function(error, user) {
       return res.redirect("/");
   });
});


module.exports = router;
