var express = require('express');
const { verify } = require('jsonwebtoken');
var router = express.Router();
var userController = require('../controllers/userController.js');
const { verifyToken, verifyTokenandAuthorization } = require("./verifyToken");
// const multer = require('multer');
// const userModel = require('../models/userModel.js');
const { isAuth, DestroyAuth } = require('../utils/verify.js');
const { verifyUser } = require('../utils/token.js');
const userModel = require('../models/userModel.js');
const { uploadImage, image } = require('../controllers/userController.js');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './public/users')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '--' + file.originalname)
//     }
// })

// const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 } })


router.put('/update/profile/image/:id', verifyToken, uploadImage)

router.get('/profile/image/:id', verifyToken, image)

/*
 * GET ......Template function already made .........
 */
// router.get('/', verifyUser, userController.list);

// router.get('/profile/image/:id', userController.image)

/*
 * GET   .........Template function..........
 */
router.get('/:id', userController.show);

router.get('/', userController.showAll);


/*
 * PUT  / Updates user profile for profile page
 */
router.put('/savechanges/:id', verifyToken, userController.update);

router.put('/changepassword/:id', verifyToken, userController.changepassword);

router.post("/forgot/password" , userController.forgotpassword );

//router.get("/reset/password/:id"  , userController.resetpassword);

router.post("/reset/password/:token"  , userController.resetpassword);

//AUTH CHECK VERIFICATION
router.get("/check/authentication", isAuth);

//AUTH DESTRUCTION
router.get("/destroy/authentication", DestroyAuth);

//users count
router.get("/count/u", userController.getAllUsers);

module.exports = router;
