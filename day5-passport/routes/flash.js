var express = require('express');
var router = express.Router();


router.get("/flash/", function(req, res) {
    req.flash("success", "회원가입 성공!");
    
    return res.redirect("/flash/result/");
});


router.get("/flash/result/", function(req, res) {
    return res.json(req.flash());
});


module.exports = router;
