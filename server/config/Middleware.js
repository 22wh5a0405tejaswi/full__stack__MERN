    exports.ensureAuthenticated = (req, res, next) => {
        if (req.isAuthenticated()) {
        return next();
        }
        res.redirect('/login');
    };
    
    exports.checkRole = (role) => (req, res, next) => {
        if (req.user && req.user.role === role) {
        return next();
        }
        res.status(403).send('Unauthorized');
    };
    