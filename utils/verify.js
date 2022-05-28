const jwt = require("jsonwebtoken");
// const createError = require("./error");

const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ bool: true, user: req.session.user }))
        // return res.send(true).json()
    }
    else {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ bool: false, user: req.session.user }))
        // return res.send(false).json()
    }
}

const DestroyAuth = (req, res) => {
    req.session.destroy((err) => {
        if (err) return next(err)
    })
    res.setHeader('Content-Type', 'application/json');
    res.end("Session Expired").json()
}



module.exports = { isAuth, DestroyAuth };