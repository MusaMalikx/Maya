var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController.js');
const passport = require('passport')


//Register user
router.post("/register", authController.create);

//Login user
router.post("/login", authController.login);

//Auth with Google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));


router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login failed"
    })
});

router.get("/login/success", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login failed"
    })
});

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: 'login/failed',
    // successRedirect: process.env.CLIENT_URL//or we can use process.env.CLIENT_URL to redirect to home page after sign in 
}),
    (req, res) => {
        res.status(200).json({ user: req.user });
    }
);

router.get('/facebook', passport.authenticate('facebook', { scope: 'email,user_photos' }));

router.get('/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: "/failed",
    // successRedirect: process.env.CLIENT_URL
}),
    // (req, res, next) => {
    //     res.status(200).json("Facebook login success");
    (req, res) => {
        res.status(200).json({ user: req.user });
    }
    // }
);

router.get("/success", (req, res) => {
    res.status(200).json({
        error: true,
        message: "Login success"
    });
});

router.get("/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login failed"
    });
});

module.exports = router;