const createError = require('http-errors');
const jwt = require('jsonwebtoken')
// const { createError } = require('../utils/error')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        // console.log(token)

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return next(createError(403, "Token is not valid"));
            req.user = user
            next()
        })
    }
    else {
        return next(createError(401, "You are not Authenticated!"))
    }
}

const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }
        else {
            return next(createError(403, "You are not Authorized!"));
        }
    })
}

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }
        else {
            return next(createError(403, "You are not Authorized!"));
        }
    })
}

module.exports = { verifyToken, verifyUser, verifyAdmin }