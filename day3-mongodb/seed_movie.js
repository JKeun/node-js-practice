// 1. MongoDB 에 다시 접속
// 2. 기존에 만들어진 Moive 모델을 가지고 와서
// 3. Movie 객체를 만든 다음에
// 4. 실제 데이터베이스에 저장

var mongoose = require('mongoose');
var Movie = require("./models/movie");

mongoose.connect("mongodb://localhost/nodecamp");
var db = mongoose.connection;


db.once("oepn", function() {
    console.log("Database is connected");
});


// request
// watcha ?per=100
// [
//  {
//      title:..., content:..., url:...
//  }
//]

