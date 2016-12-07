var mongoose = require('mongoose');

// 1. userSchema ( new mongoose.Schema({...}))
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    phonenumber: String,
    password: String,
});


// 2. User ( mongoose.model("User", userSchema))
var User = mongoose.model("User", userSchema);


module.exports = User;
