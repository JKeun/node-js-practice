var express = require("express");
var router = express.Router();

var Post = require("../models/post");

// 2. postRouter => posts:lst ( GET "/posts/" ), 
//               => posts:create ( POST "/posts/" ), 
//               => posts:new (GET "/posts/new/" => 새 글을 쓸 수 있는 form 을 render )

router.route("/")

    .get(function(req, res, next) {  // posts:list
        Post.find({}, function(error, posts) {
            if (error) return next(error);
            return res.render("posts/list", {posts: posts});
        }) 
    })

    .post(function(req, res) {  // posts:cerate
        var title = req.body.title;
        var content = req.body.content;

        var post = new Post({
            title: title,
            content: content
        });

        post.save(function(error, post) {
            return res.redirect("/posts/" + post._id + "/");
        });
    });


router.route("/new/")
    .get(function(req, res) {  // posts:new
        return res.render("posts/new");
    });


router.param("postId", function(req, res, next, postId) {
    Post.findOne({_id: postId}, function(error, post) {
        if (error) return next(error);

        req.post = post;
        next();
    });
});


router.get("/:postId/", function(req, res) {
    return res.render("posts/detail", {post: req.post});        
});





module.exports = router;
