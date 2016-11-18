var path = require('path');
var express = require('express');

var app = express();


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


app.get("/", function(req, res) {
    return res.render("home");
});


app.listen(process.env.PORT | 3030, function() {
    console.log("Server is running!");
});
