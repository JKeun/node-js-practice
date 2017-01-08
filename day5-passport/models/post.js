var mongoose = require('mongoose');


var postSchema = mongoose.Schema({
    title: String,
    content: String
});


var Post = mongoose.model("Post", postSchema);


module.exports = Post;

