// npm install -g nodemon ( g ==> global )
// nodemon app.js  # 앱 실행
// npm install --save express

var express = require('express');


var app = express();


// if request.url === "/"
app.get("/", function(req, res) {
    return res.send("hello world!");
});


app.listen(process.env.PORT | 3030, function() {
    console.log("Server is running!");
});
