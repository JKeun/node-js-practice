var User = require("../module/user");


var passportLocal = require('passport-local');
var passportLocalStrategy = passportLocal.Strategy;

var passportKakao = require('passport-kakao');
var passportKakaoStrategy = passportKakao.Strategy;


module.exports = function(passport) {

    passport.use(new passportLocalStrategy(User.authenticate()));
    passport.serializeUser(User.serialize());
    passport.deserializeUser(User.deserialize());

    passport.use(new passportKakaoStrategy(
        {
            clientID: "580d5f3bd932796915950408014f8a81", // REST API
            callbackURL: "http://localhost:3030/auth/kakao/callback"
        },
        function (accessToken, refreshToken, profile, next){
            User.findOne({_idd: profile.id}, function(error, user) {
                if (user) { return next(error, user); }
                var user = new User({
                    username: profile.id,
                    password: profile.id  // password 가 있을 경우 대체 필요
                })

                user.save(function(error, user) {
                    return next(error, user);
                });
            })
        }    
    ));
}
