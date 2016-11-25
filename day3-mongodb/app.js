var path = require('path');

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');


var homeRouter = require("./routes/home");
var aboutRouter = require("./routes/about");


var app = express();


app.set("view engine", "pug");
app.set("veiws", path.join(__dirname, "views"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan("combined"));


app.use("/", homeRouter);
app.use("/about/", aboutRouter);


app.listen(process.env.PORT | 3030, function() {
    console.log("Server is running!");
});
