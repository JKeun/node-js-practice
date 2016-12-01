var mongoose = require('mongoose');
var Movie = require("./models/movie");

var request = require('request');


mongoose.connect("mongodb://mongodb.dobest.io/jkpark2");
var db = mongoose.connection;


db.once("open", function() {
    console.log("Database is connected");

    request.get("https://watcha.net/home/news.json?page=1&per=100", function(error, response, body) {
        var data = JSON.parse(body);
        var newsItems = data.news;
        console.log(newsItems.length);

        // request 되기전에 db.close 되면 안되므로 이 안에다 코드작성함
        db.close(function() {
            console.log("Database is disconnected");
        });
    });
});
