var express = require('express');
var router = express.Router();

var Movie = require("../models/movie");


router.get("/", function(req, res) {
    var mongoQuery = {}; // 이름 검색

    Movie.find(mongoQuery, function(error, movies) {
        return res.render("movies", {movieItems: movies});
    });
});


module.exports = router;
