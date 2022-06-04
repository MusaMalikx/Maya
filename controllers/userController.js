var UserModel = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const userModel = require('../models/userModel')
const nodemailer = require('nodemailer')
/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {

    uploadImage: async (req, res, next) => {
        // try {
        //     console.log(req.file);

        //     const user = await userModel.findByIdAndUpdate(req.params.id, { picture: req.file.path }, { new: true })
        //     res.status(200).json("file uploaded!")
        // } catch (err) {
        //     next(err)
        // }

        // console.log(req.body)

        try {
            const user = await userModel.findByIdAndUpdate(req.params.id, { picture: req.body.image }, { new: true })
            res.status(200).json("Picture uploaded!")
            // res.status(200).json(item);
        } catch (error) {
            next(error)

        }

    },

    image: async (req, res, next) => {
        // try {
        //     console.log(req.file);

        //     const user = await userModel.findOne({ _id: req.params.id })

        //     // res.setHeader('Content-Type', 'image/jpeg')
        //     res.download(user.picture)
        //     // res.status(200).json("file has been sent!")
        // } catch (err) {
        //     next(err)
        // }
        try {
            const user = await userModel.findById({ _id: req.params.id })
            // await item.save();
            // console.log(user)
            res.status(201).json(user.picture);
        } catch (error) {
            next(error)
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

    showAll: async (req, res, next) => {

        // console.log('Show All')
        const users = await UserModel.find()
        try {

            if (users) {
                res.status(200).json(users)
            }
            else if (!users) {
                res.status(201).json('No User Found!')
            }
        }
        catch (err) {
            next(err)
        }
    },

    //  getAlluser

    getAllUsers: function (req, res) {

        console.log("here")
        UserModel.count({}, function (err, count) {
            console.log("Number of users:", count);
            return res.json(count);
        })
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
    },

    forgotpassword: async (req,res,next) => {
        const {email} = req.body.email;

        const user = await UserModel.findOne({email: req.body.email});

        if(!user) {
            return res.status(401).json("Email not found!!");
        }

        const secret = process.env.JWT_RESET_KEY ;

        const payload = {
            // email: user.email,
            _id: user.id
        }


        const token = jwt.sign(payload , secret , {expiresIn: '15m'})
        const link = `http://localhost:3000/resetpass/${token}`;


        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.GOOGLE_APP_GMAIL,
              pass: process.env.GOOGLE_APP_PASS  //this is the app pass not the orignal password
            }
          });

        //mail structure
          var mailOptions = {
            from: 'maya.noreply.app@gmail.com',
            to: req.body.email,
            subject: 'Reset Password Link for Maya',
            text: 'To Change Password Click this link :- ' + link,
          };


          user.updateOne({resetLink: token} , (err ,sucsess) => {
              if(err) {
                  return res.status(400).json("Reset password Link error!");
              } else {
                  ///-----------Sends mail to the user------
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                        console.log(error);
                        return res.send(error);
                        } else {
                        console.log('Email sent: ' + info.response);
                        return res.send(info.response);
                        }
                    });
              }
          });

          
    },

    resetpassword: async (req, res ,next) => {
        const resetLink = req.params.token;
        const  newPass = req.body.newpassword;
        if(resetLink) {
            jwt.verify(resetLink , process.env.JWT_RESET_KEY , async (err,decodedData) => {
                if(err) {
                    return res.status(401).json("Incorrect token or expired");
                }
                else {
                    const user = await UserModel.findOne({resetLink: resetLink});

                    if(!user) {
                        return res.status(401).json("User not found or Reset Link expired!!");
                    }
                    try{
                        //updates password into hash then stores it in db
                        const newpassword = await bcrypt.hash(newPass, 10);

                        const updatedUser = await UserModel.findByIdAndUpdate(user.id , {
                            password: newpassword,
                            resetLink: ""
                        } , {
                            new: true
                        });
        
                        return res.status(200).json("Password Updated");
        
                    } catch(err) {
                        return res.status(500).json("here erro");
                    }
                }
            })

        } else {
            return res.status(401).json({error: "Authentication error!"});
        }

    }

};
