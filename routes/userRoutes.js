var express = require('express');
const { verify } = require('jsonwebtoken');
var router = express.Router();
var userController = require('../controllers/userController.js');
const {verifyToken , verifyTokenandAuthorization} = require("./verifyToken");
/*
 * GET ......Template function already made .........
 */
router.get('/', userController.list);

/*
 * GET   .........Template function..........
 */
router.get('/:id', userController.show);


/*
 * PUT  / Updates user profile for profile page
 */
router.put('/',  verifyToken ,userController.update);

router.put('/changepass' , verifyToken ,userController.changepassword);


module.exports = router;
