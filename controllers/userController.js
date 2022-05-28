var UserModel = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const userModel = require('../models/userModel')
/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {

    uploadImage: async (req, res, next) => {
        try {
            console.log(req.file);
    
            const user = await userModel.findByIdAndUpdate(req.params.id, { picture: req.file.path }, { new: true })
            res.status(200).json("file uploaded!")
        } catch (err) {
            next(err)
        }
    },

    image: async (req, res, next) => {
        try {
            console.log(req.file);

            const user = await userModel.findOne({ _id: req.params.id })

            // res.setHeader('Content-Type', 'image/jpeg')
            res.download(user.picture)
            // res.status(200).json("file has been sent!")
        } catch (err) {
            next(err)
        }
    },

    /**
     * userController.list()
     */
    list: function (req, res) {
        UserModel.find(function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }

            return res.json(users);
        });
    },

    /**
     * userController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        UserModel.findOne({ _id: id }, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }

            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

            return res.json(user);
        });
    },



    /**
     * userController.update() -------------------Function to update profile changes--------------------
     */
    update: async (req, res) => {

        // var id = req.user.id;


        //gets all varaibles in body and updates them
        try {

            const user = await UserModel.findOne({ _id: req.params.id });

            if (!user) {
                return res.status(401).json("User not found!!");
            }


            if (req.body.password) {
                return res.status(401).json("Can not update password!");
            }

            if (req.body.name == "" || req.body.email == "") {
                return res.status(401).json("Name or email canot be set empty!");
            }

            const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {
                new: true
            });
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //--------------------- To change Password-------------------
    changepassword: async (req, res) => {

        console.log(req.params.id)

        const user = await UserModel.findOne({ _id: req.params.id });

        if (!user) {
            return res.status(401).json("User not found!!");
        }

        //compares the given old password with stored password hash in db 
        if (await bcrypt.compare(req.body.oldpassword, user.password)) {

            //updates password
            const newpassword = await bcrypt.hash(req.body.newpassword, 10);
            try {

                const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
                    password: newpassword
                }, {
                    new: true
                });

                res.status(200).json("Password Updated");

            } catch (err) {
                res.status(500).json("here error");
            }

        }
        else {
            res.status(401).json("Incorrect password!");
        }
    }

};
