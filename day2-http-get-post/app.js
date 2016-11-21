var path = require('path');
var express = require('express');

var bodyParser = require('body-parser');
var morgan = require('morgan');


var homeRouter = require("./routes/home");
var httpRouter = require("./routes/http");
var watchaRouter = require("./routes/watcha");
var usersRouter = require("./routes/users");


var app = express();


// application settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


// Middleware settings ( 3rd Party Packages )
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan("combined"));


// Middleware settings
app.use("/", homeRouter);
app.use("/http/", httpRouter);
app.use("/watcha/", watchaRouter);
app.use("/users/", usersRouter);


app.listen(process.env.PORT | 3030, function() {
    console.log("Server is running!");
});
