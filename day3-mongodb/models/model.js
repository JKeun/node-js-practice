var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var movieSchema = new Schema({
    title: String,
    content: String,
    image: String
});
