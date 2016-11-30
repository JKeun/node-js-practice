var mongoose = require("mongoose");
var Movie = require("./models/movie");

mongoose.connect("mongodb://mongodb.dobest.io/jkpark2");
var db = mongoose.connection;

db.once("open", function() {
    console.log("Database is connected");

    var newMovie = new Movie({
        title: "영화제목",
        content: "영화본문",
        url: "https://image.jpg"
    });
                
    newMovie.save(function(error) {
        if (error) throw error;
        console.log("New Movie Added!");
    });
});
