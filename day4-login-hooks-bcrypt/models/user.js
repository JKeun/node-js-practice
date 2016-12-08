var mongoose = require('mongoose');

var bcrypt = require('bcrypt');


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


// 만약, save 하기 직전에 입력받은 암호를 hash화 하여 저장하는 기능
userSchema.pre("save", function(next) {
    // 비밀번호 hashing => bcrypt 암호화 방식
    var user = this;  // user.username, user.email ... 유저가 바로 직전에 입력한것
    bcrypt.hash(user.password, 10, function(error, hash) {  // 10번 암호화작업
        
        console.log("BCRYPT 가 실행되었습니다!!!");

        user.password = hash;
        next();
    }); 
});


userSchema.statics.authenticate = function(username, password, callback) {
    User.findOne({username: username}, function(error, user) {
        if (error) return callback(error);
        if (!user) {
            // 200 OK
            // 401 UnAuthorized
            var error = new Error("username 에 매칭되는 유저가 없습니다.");
            error.status = 401;
            return callback(error);
        }

        // 비밀번호와 hashing 비밀번호가 맞는지 비교해주는 함수
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
};



// 2. User ( mongoose.model("User", userSchema))
var User = mongoose.model("User", userSchema);


module.exports = User;
