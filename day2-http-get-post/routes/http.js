var express = require('express');
var router = express.Router();


router.get("/", function(req, res) {
    // ...?key1=value1&key2=value2
    // 처음 시작은 "?", 그 다음부터는 "&"
    var data = req.query;
    return res.send(data);
});

router.post("/", function(req, res) {
    var data = req.body;
    return res.send(data);
});


module.exports = router;
