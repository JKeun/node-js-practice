var express = require('express');
var router = express.Router();


router.get("/login/", function(req ,res) {
    // login form rendering
    return res.render("auth/login");
});


router.post("/login/", function(req, res, next) {
    // login
});


router.get("/signup/", function(req, res) {
    // signup form rendering
    return res.render("auth/signup");
});


router.post("/signup/", function(req, res) {
    // signup
});


module.exports = router;
