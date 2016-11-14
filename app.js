// npm install -g nodemon ( g ==> global )
// nodemon app.js  # 앱 실행
// npm install --save express

var express = require('express');


var app = express();


// 1. "Logger" 라고 부르는 미들웨어 함수가 받아서,
// 요청된 주소를 출력해주고
// 그 다음 콜백함수를 실행
app.use(function(req, res, next) {
    // Log 를 출력해주는 미들웨어
    console.log("Requested on: " + req.url);
    next();  // 그 다음 미들웨어를 실행시켜주는 콜백 함수
});

// app.use(function(req, res, function(req, res) {...}) {...});  // 한줄로 표현가능


// 2. 받아서 "HOME" 이라는 텍스트를 보내주고
// 요청을 끝낸다. ( send => res.write + res.end )
app.get("/", function(req, res) {
    return res.send("HOME");
});

app.get("/about/", function(req, res) {
    return res.send("ABOUT");
});


app.listen(process.env.PORT | 3030, function() {
    console.log("Server is running!");
});
