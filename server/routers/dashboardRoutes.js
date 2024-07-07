    exports.dashboard = (req, res) => {
        // Render dashboard based on user role
        const { role } = req.user;
        if (role === 'hod') {
        res.send(`<h1>Welcome HOD ${req.user.name}</h1>`);
        } else if (role === 'principal') {
        res.send(`<h1>Welcome Principal ${req.user.name}</h1>`);
        } else {
        res.status(403).send('Unauthorized');
        }
    };
    