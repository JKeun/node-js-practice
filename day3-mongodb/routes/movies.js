var express = require('express');
var router = express.Router();

var Movie = require("../models/movie");


router.get("/", function(req, res) {
    return res.send("movies!");
});


module.exports = router;
