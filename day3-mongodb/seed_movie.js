var mongoose = require('mongoose');
var Movie = require("./models/movie");

var request = require('request');


mongoose.connect("mongodb://localhost/nodecamp");
var db = mongoose.connection;


db.once("open", function() {
    console.log("Database is connected");

    request.get("https://watcha.net/home/news.json?page=1&per=100", function(error, response, body) {
        var data = JSON.parse(body);
        var newsItems = data.news;
        var movieItems = [];

        newsItems.forEach(function(newsItem) {
            var movieItem = {
                title: newsItem.title,
                content: newsItem.content,
                image: newsItem.image
            };

            movieItems.push(movieItem);
        });

        Movie.collection.insert(movieItems, function(error, movies) {
            if (error) throw error;
            console.log("Successfuly added");
            
            // request 되기전에 db.close 되면 안되므로 이 안에다 코드작성함
            // insert 되기전에 close 되면 안되므로 이 안에다 코드 작성
            db.close(function() {
                console.log("Database is disconnected");
            });
        });
    });
});
