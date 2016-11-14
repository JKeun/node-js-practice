// npm install -g nodemon ( g ==> global )
// nodemon app.js  # 앱 실행
// npm install --save express

var express = require('express');


var app = express();

var router = require("./router");


app.use(function(req, res, next) {
    console.log("Requested on: " + req.url);
    next();
});

app.use("/", router);


app.listen(process.env.PORT | 3030, function() {
    console.log("Server is running!");
});
