const express = require('express')

const router = express.Router();

const authController = require('../controller/authController')



/* Middelware for checking user email exists or not */

router.use(authController.checkUserEmailInSystem)


/* User Login Process Router */

router.post('/login', authController.userLoginController)

router.post('/signUp',authController.userSignUpController)


module.exports = router