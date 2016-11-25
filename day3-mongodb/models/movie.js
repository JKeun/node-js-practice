var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// 1. 스키마 생성하기
var movieSchema = new Schema({
    title: String,
    content: String,
    image: String
});


// 2. 스키마를 기반으로, 실제 모델을 생성하기
var Movie = mongoose.model("Movie", movieSchema);


module.exports = Movie;
