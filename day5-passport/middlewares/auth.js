function loginRequired(req, res, next) {
    if (!req.session.user) {
        req.flash("error", "로그인 필요한 페이지!");
        return res.redirect("/login/");
    }

    next();
}


module.exports.loginRequired = loginRequired;
