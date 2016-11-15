// 이 라우터를
// 하나의 미들웨어 형태로 만들어서
// ===> express 에서 불러 쓸 수 있도록 하자.


var express = require('express');
var router = express.Router();

var httpRequest = require('request');
// 이렇게 이름을 바꿔서 가져오는 이유는 변수명 충돌을 막기 위해서

router.get("/", function(req, res) {
    return res.render("home", {animals: ["dog", "cat", "bird", "cow"]});
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

router.get("/watcha/", function(req, res) {
    // 왓챠 영화 뉴스 정보가 뜨도록
    // network 탭에서 news.json 으로 검색하면 API 주소가 있다.

    var url = "https://watcha.net/home/news.json?page=2&per=20";
    httpRequest(url, function(error, httpResponse, body) {
        return res.send(JSON.parse(body));
    });
});

module.exports = router;
