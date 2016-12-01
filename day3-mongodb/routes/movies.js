var express = require('express');
var router = express.Router();

var Movie = require("../models/movie");


router.get("/", function(req, res) {
    var query = req.query.query || ""; // 만약에 없으면 모든 docs

    // movies 라는  collection 에서
    // title 에 만약 query ("드래곤볼") 포함된 모든 documents
    // 정규표현식 => "____드래곤볼____"
    // ".*드래곤볼.*"
    // ".*" + query + ".*"
    
    var mongoQuery = {
        title: {
            $regex: ".*" + query + ".*"
        }
    }; // 이름 검색

    Movie.find(mongoQuery, function(error, movies) {
        return res.render("movies", {movieItems: movies});
    });
});


module.exports = router;
