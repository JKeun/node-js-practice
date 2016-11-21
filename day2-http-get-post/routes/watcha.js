var express = require('express');
var router = express.Router();

var httpRequest = require('request');

router.get("/", function(req, res) {
    var query = req.query.query;

    var url = "https://watcha.net/home/news.json?page=1&per=20";
    httpRequest(url, function(error, httpResponse, body) {
        var data = JSON.parse(body);
        var newsItems = data.news;

        if (query) {
            // 새로운 newsItems 를 만들자.
            var matchedNewsItems = [];
            newsItems.forEach(function(newsItem) {
                if (newsItem.title.indexOf(query) > -1) {
                    matchedNewsItems.push(newsItem);
                };
            });
            newsItems = matchedNewsItems;
        }

        var context = {
            newsItems: newsItems,
            query: query
        };

        return res.render("watcha", context);
    });
});


module.exports = router;
