// 이 라우터를
// 하나의 미들웨어 형태로 만들어서
// ===> express 에서 불러 쓸 수 있도록 하자.


var express = require('express');
var router = express.Router();


router.get("/", function(req, res) {
    return res.send("HOME");
});

router.get("/about/", function(req, res) {
    return res.send("ABOUT");
});

module.exports = router;
