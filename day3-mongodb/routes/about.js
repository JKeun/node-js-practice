var express = require('express');
var router = express.Router();


router.get("/", function(req, res) {
    return res.render("about");
});


module.exports = router;
