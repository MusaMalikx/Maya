var express = require('express');
const { verify } = require('jsonwebtoken');
var router = express.Router();
var userController = require('../controllers/userController.js');
const { verifyToken, verifyTokenandAuthorization } = require("./verifyToken");
const multer = require('multer');
const userModel = require('../models/userModel.js');
const { isAuth, DestroyAuth } = require('../utils/verify.js');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/users')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})

const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 } })

router.post('/update/profile/image/:id', upload.single("avatar"), userController.uploadImage)

/*
 * GET ......Template function already made .........
 */
router.get('/', userController.list);

router.get('/profile/image/:id', userController.image)

/*
 * GET   .........Template function..........
 */
router.get('/:id', userController.show);


/*
 * PUT  / Updates user profile for profile page
 */
router.put('/savechanges/:id', userController.update);

router.put('/changepassword/:id', userController.changepassword);

//AUTH CHECK VERIFICATION
router.get("/check/authentication", isAuth);

//AUTH DESTRUCTION
router.get("/destroy/authentication", DestroyAuth);

module.exports = router;
