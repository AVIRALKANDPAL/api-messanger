const express = require('express')
const path = require('path')
const multerManager = require('../../helpers/multerManager')
const multer = require('multer')

const router = express.Router();

const authController = require('../controller/authController')

/* Middleware for checking email validation */

router.use(authController.checkUserEmailInSystem)

/* User Login Process Router */

router.post('/login', authController.userLoginController)

router.post('/signUp', authController.userSignUpController)

router.post('/sendOtp', authController.sendOtpToEmail)

router.post('/verifyOtp', authController.verifyOtp)

router.post('/uploadAvatar', authController.updateUserController)

module.exports = router