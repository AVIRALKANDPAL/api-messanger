const mongoose = require('mongoose');

const otpVerification  = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp:{
        type: Number,
        required: true
    }
})

const otpModel = mongoose.model("otp_verification", otpVerification);

module.exports = otpModel;
