var mongoose = require('mongoose');

var bcrypt = require('bcrypt');


// 1. userSchema ( new mongoose.Schema({...}) )
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    phonenumber: String,
    password: String,
});


userSchema.pre("save", function(next) {
    var user = this;
    
    bcrypt.hash(user.password, 10, function(error, hash) {
        
        console.log("BCRYPT 가 실행되었습니다.!!!");
        
        user.password = hash;
        next();
    });
});


userSchema.statics.serialize = function() {
    return function(user, next) {
        return next(null, user._id);
    }
};


userSchema.statics.deserialize = function() {
    return function(userId, next) {
        User.findOne({_id: userId}, function(error, user) {
            next(error, user);
        });
    }
};


userSchema.statics.authenticate = function() {
    return function(username, password, callback) {
        User.findOne({username: username}, function(error, user) {
            if (error) return callback(error);
            if (!user) {
                var error = new Error("username 에 매칭되는 유저가 없습니다.");
                error.status = 401;
                return callback(error);
            }

            bcrypt.compare(password, user.password, function(error, result) {
                if (error) return callback(error);
                if (result) {
                    return callback(null, user);
                } else {
                    var error = new Error("비밀번호가 틀렸습니다.");
                    return callback(error);
                }
            });
        });
    }
};


// 2. User (mongoose.model("User", userSchema) )
var User = mongoose.model("User", userSchema);


module.exports = User;
