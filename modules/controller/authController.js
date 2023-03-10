const universalFunctions = require('../../utils/universalFunction')
const OTPVerification = require('../../models/auth/otp_verification');
const response = require('../../Responses-handler/response');
const constants = require('../../core/constants/constant');
const User = require('../../models/auth/users');
const passwordManager = require('../../helpers/password_manager');


exports.checkUserEmailInSystem = async (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    if (email == null) {
        response.httpResponse({
            response: res,
            statusCode: constants.statusCode.ok,
            message: constants.messages.emailCanNotBeEmpty,
            status: constants.response_status.failure,
        })
    } else if (!universalFunctions.validateEmail(email)) {
        response.okHttpResponse({
            response: res,
            statusCode: constants.statusCode.ok,
            message: constants.messages.invalidEmail,
            status: constants.response_status.failure,
        })
    } else {
        next()
    }
};

exports.userLoginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ 'email': email });
        if (user != null) {
            const isPasswordCorrect = await passwordManager.comparePassword(password, user.password);
            if (isPasswordCorrect) {
                response.okHttpResponse({
                    response: res,
                    message: constants.messages.userLoggedIn,
                })
            } else {
                response.okHttpResponseFailure({
                    response: res,
                    message: constants.messages.passwordNotCorrect,
                })
            }
        } else {
            response.okHttpResponseFailure({
                response: res,
                message: constants.messages.emailNotFound,
            })
        }
    } catch (err) {
        response.okHttpResponseFailure({
            response: res,
            message: e.message,
        })
    }
};

exports.sendOtpToEmail = async (req, res) => {
    const { email } = req.body;
    const otp = universalFunctions.generateOTP(6);
    try {
        const saveInDatabase = await OTPVerification.create({ 'email': email, 'otp': otp });
        response.httpResponse({
            response: res,
            statusCode: constants.statusCode.ok,
            message: constants.messages.emailOtpSend,
            status: constants.response_status.success,
        })
    } catch (err) {
        response.okHttpResponseFailure({
            response: res,
            message: e.message,
        })
    }
}


exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body
    try {
        const emailVerification = await OTPVerification.findOne({ 'email': email });
        if (emailVerification != null) {
            if (otp === emailVerification.otp) {
                await OTPVerification.deleteOne({ 'email': email })
                var user = await User.findOne({ 'email': email })
                if (user != null) {
                    response.okHttpResponse({
                        response: res,
                        message: constants.messages.otpVerifiedSuccessfully,
                        data: user,
                    })
                } else {
                    response.okHttpResponse({
                        response: res,
                        message: constants.messages.otpVerifiedSuccessfully,
                        data: null
                    })
                }
            } else {
                response.okHttpResponseFailure({
                    response: res,
                    message: constants.messages.otpEnteredIncorrect,
                })
            }
        } else {
            response.okHttpResponseFailure({
                response: res,
                message: constants.messages.emailNotFound,
            })
        }
    } catch (err) {
        response.okHttpResponseFailure({
            response: res,
            message: e.message,
        })
    }
}

exports.userSignUpController = async (req, res) => {
    try {
        const user = await User.create(req.body)
        await user.save()
        response.okHttpResponse({
            response: res,
            message: constants.messages.signUpSuccess,
            data: user,
        })
    } catch (err) {
        response.okHttpResponseFailure({
            response: res,
            message: err.message,
        })
    }
};

exports.updateUserController = async (req, res) => {
    const { name,email } = req.body;
    
    if (name != null) {

    } else if (req.file != null) {
        const image = req.file;
        image.path = "http://localhost:3000/"+image.path;
        const user = await User.findOne({ email:email });
        if (user!=null){
            user.image = image.path;
            response.okHttpResponse({
                response: res,
                message: constants.messages.profileUploaded,
                data:user
            })
        }else{
            response.okHttpResponse({
                response: res,
                message: constants.messages.profileUploaded,
                data:image
            })
        }
        
    }
}