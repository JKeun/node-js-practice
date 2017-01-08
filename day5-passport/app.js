var path = require('path');

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('connect-flash');
var messages = require('express-messages');


var homeRouter = require("./routes/home");
var authRouter = require("./routes/auth");
// var flashRouter = require("./routes/flash");
var postsRouter = require("./routes/posts");


mongoose.connect("mongodb://localhost/nodecamp");
var db = mongoose.connection;


db.once("open", function() {
    console.log("Database is connected");
})


var app = express();


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: "Node.js",
    resave: true,
    saveUninitialized: true
}));

app.use(flash());
app.use(function(req, res, next) {
    res.locals.messages = messages(req, res);
    next();
});


app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
});


app.use("/", homeRouter);
app.use("/", authRouter);
// app.use("/", flashRouter);
app.use("/posts/", postsRouter);


app.use(function(error, req, res, next) {
    res.status(error.status || 500);
    return res.render("error", {error: error});
    next();
});


app.listen(process.env.PORT || 3030, function() {
    console.log("Server is running!");
});
