var express = require('express');
var router = express.Router();

var httpRequest = require('request');

router.get("/", function(req, res) {
    var query = req.query.query;

    var url = "https://watcha.net/home/news.json?page=1&per=20";
    httpRequest(url, function(error, httpResponse, body) {
        var data = JSON.parse(body);
        var newsItems = data.news;

        var context = {
            newsItems: newsItems,
            query: query
        };

        return res.render("watcha", context);
    });
});


module.exports = router;
