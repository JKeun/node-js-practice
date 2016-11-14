// 이 라우터를
// 하나의 미들웨어 형태로 만들어서
// ===> express 에서 불러 쓸 수 있도록 하자.


var express = require('express');
var router = express.Router();

var httpRequest = require('request');
// 이렇게 이름을 바꿔서 가져오는 이유는 변수명 충돌을 막기 위해서

router.get("/", function(req, res) {
    return res.send("HOME");
});

router.get("/about/", function(req, res) {
    return res.send("ABOUT");
});

router.get("/rooms/:roomId/", function(req, res) {
    var roomId = req.params.roomId;

    var url = "https://api.zigbang.com/v1/items?detail=true&item_ids=" + roomId;

    httpRequest(url, function(error, httpResponse, body) {
        return res.send(JSON.parse(body));
    });
});

module.exports = router;
