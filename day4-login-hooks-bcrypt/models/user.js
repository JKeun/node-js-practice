var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 1. userSchema ( new mongoose.Schema({...}))
var userSchema = new Schema({
    name: String,
    email: String,
    phonenumber: String,
    password: String,
    password_confirmation: String
});


// 2. User ( mongoose.model("User", userSchema))
var User = mongoose.model("User", userSchema);


module.exports = User;
