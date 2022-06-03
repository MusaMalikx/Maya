var UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {

    /**
 * userController.create()
 */
    //register function
    create: async function (req, res) {
        //also check if fields are empty or not

        const password = await bcrypt.hash(req.body.password, 10);

        var user = new UserModel({
            email: req.body.email,
            password: password,
            name: req.body.name
        });

        user.save(function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating user',
                    error: err
                });
            }

            return res.status(201).json(user);
        });

    },

    login: async (req, res) => {

        try {

            const email = req.body.email;

            const user = await UserModel.findOne({ email: email });

            if (!user) {
                return res.status(401).json("Incorrect email or password!!");
            }

            // check if its password matches

            if (await bcrypt.compare(req.body.password, user.password)) {

                // console.log(user)
                // const accessToken = jwt.sign(
                // {
                //     id: user.id,
                //     isAdmin: user.isAdmin
                // } ,
                // process.env.JWT_SEC,
                // {expiresIn: "1d"}
                // );

                const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SEC);

                const { password, ...others } = user._doc;
                // req.session.isAuth = true;
                // req.session.user = { ...others }
                // console.log({ ...others })

                object = {
                    token: token,
                    user: { ...others }
                }
                res.status(200)
                    .json(object)

            }
            else {
                res.status(401).json("Incorrect password!");
            }

        } catch (e) {
            res.status(500).json(e);
        }

    }
};