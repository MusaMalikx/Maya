const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require("mongoose");
const userModel = require('./models/userModel.js');
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require("passport");



//This is the function to implement the passport js to sign in and signup using Google oAth2
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email"],
},
    async (accessToken, refreshToken, profile, done) => {
        //done(null ,profile);
        const newUser = {
            googleId: profile.id,
            name: profile.name.givenName,
            lastname: profile.name.familyName,
            picture: profile.photos[0].value
        }
        console.log(profile.photos[0].value);
        try {
            let user = await userModel.findOne({ googleId: profile.id });

            if (user) {
                //sessiosn maintain 

                done(null, user);   //does not create new user if already in db , just returns the matching user
            } else {
                //user = await new userModel.
                user = await userModel.create(newUser);  //creates new user if we login through google for first time

                //Store in session here


                done(null, user);
            }
        } catch (err) {
            console.error(err);
        }
    }
));



passport.use(new FacebookStrategy({
    clientID: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'name', 'picture.type(large)', 'email']
},
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        const newUser = {
            facebookId: profile.id,
            name: profile.name.givenName,
            lastname: profile.name.familyName,
            picture: profile.photos[0].value
        }
        try {
            let user = await userModel.findOne({ facebookId: profile.id });
            if (user) {
                //session maintain 

                done(null, user);   //does not create new user if already in db , just returns the matching user
            } else {
                //user = await new userModel.
                user = await userModel.create(newUser);  //creates new user if we login through google for first time

                //Store in session here


                done(null, user);
            }

        } catch (err) {
            console.error(err);
            done(err, null);
        }

    }
));

//this serialize the user
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    // userModel.findById(id,  (err, user) =>  done(err, user) );
    return done(null, user);
});




