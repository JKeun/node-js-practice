var express = require('express');
var router = express.Router();


router.get("/", function(req, res) {
    return res.send("contacts!");
});


router.post("/", function(req, res) {

});


module.exports = router;
