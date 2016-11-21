var fs = require('fs');
var path = require('path');

var express = require('express');
var router = express.Router();


router.get("/", function(req, res) {
    var search = req.query.search; // GET 데이터
    
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

    if (search) {
        var matchedUserList = [];

        users.forEach(function(user) {
            if (user.name.indexOf(search) > -1) {
                matchedUserList.push(user);
            }
        });

        users = matchedUserList;
    }

    return res.render("users", {users: users});
});


router.post("/", function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var phonenumber = req.body.phonenumber;

    var newUserRow = name + "," + email + "," + phonenumber + "\n";

    fs.appendFile(
        path.join(__dirname, "../db", "users.csv"),
        newUserRow,
        function(error) {
            return res.redirect("/users/");
        }

    );
});

module.exports = router;
