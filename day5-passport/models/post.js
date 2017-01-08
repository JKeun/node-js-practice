var mongoose = require('mongoose');


var postSchema = mongoose.Schema({
    title: String,
    content: String
});


var Post = mongoose.model("Post", postSchema);


module.exports = Post;

// 1. Post Model


// 2. postRouter => posts:lst ( GET "/posts/" ), 
//               => posts:create ( POST "/posts/" ), 
//               => posts:new (GET "/posts/new/" => 새 글을 쓸 수 있는 form 을 render )
