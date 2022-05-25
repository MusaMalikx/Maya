var UserModel = require('../models/userModel.js');
const bcrypt = require ('bcrypt');
const jwt = require("jsonwebtoken");
/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {

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

        UserModel.findOne({_id: id}, function (err, user) {
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
    update: async(req, res) => {
        
        var id = req.user.id;


        //gets all varaibles in body and updates them
        try{

            const user = await UserModel.findOne({_id: req.user.id});

            if(!user) {
                return res.status(401).json("User not found!!");
            }


            if(req.body.password) {
                return res.status(401).json("Can not update password!");
            }
    
            if(req.body.name == "" || req.body.email == ""){
                return res.status(401).json("Name or email canot be set empty!");
            }

            const updatedUser = await UserModel.findByIdAndUpdate(req.user.id , {
                $set: req.body
            } , {
                new: true
            });
            res.status(200).json(updatedUser);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    //--------------------- To change Password-------------------
    changepassword: async (req,res) => {

        const user = await UserModel.findOne({_id: req.user.id});

        if(!user) {
            return res.status(401).json("User not found!!");
        }

        //compares the given old password with stored password hash in db 
        if (await bcrypt.compare(req.body.oldpassword, user.password)) {

        //updates password
        const newpassword = await bcrypt.hash(req.body.newpassword, 10);
            try{

                const updatedUser = await UserModel.findByIdAndUpdate(req.user.id , {
                    password: newpassword
                } , {
                    new: true
                });

                res.status(200).json("Password Updated");

            } catch(err) {
                res.status(500).json("here erro");
            }
            
        }
        else {
        res.status(401).json("Incorrect password!");
        }
    }

};
