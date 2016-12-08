var express = require('express');
var router = express.Router();


router.get("/", function(req, res) {
    req.flash("success", "회원가입을 성공했습니다.");
    req.flash("node.js", "is awesome");

    return res.redirect("/flash/result/");
});


router.get("/result/", function(req, res) {
    return res.json(req.flash());
});


module.exports = router;
