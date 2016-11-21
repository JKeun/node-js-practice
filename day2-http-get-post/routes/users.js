var fs = require('fs');
var path = require('path');

var express = require('express');
var router = express.Router();


router.get("/", function(req, res) {
    var data = fs.readFileSync(
        path.join(__dirname, "../db", "users.csv"),
        {encoding:  "utf8"}        
    );
    var rows = data.split("\n");
    var users = [];
    rows.forEach(function(row) {
        var name = row.split(",")[0];
        var email = row.split(",")[1];
        var phonenumber = row.split(",")[2];

        var user = {
            name: name,
            email: email,
            phonenumber: phonenumber
        };

        users.push(user);
    });

    return res.render("users", {users: users});
});

module.exports = router;
