module.exports = {
    ensureAuthenticatedStudent: function(req, res, next){
        if (req.isAuthenticated()){
            return next()
        }
        req.flash('error_msg', 'Please log in to view this resource')
        res.redirect('/user/student/login')
    },

    ensureAuthenticatedManager: function(req, res, next){
        if (req.isAuthenticated()){
            return next()
        }
        req.flash('error_msg', 'Please log in to view this resource')
        res.redirect('/user/manager/login')
    }
}