const messages= {
    //A
    //B
    //C
    //D
    //E
    "emailCanNotBeEmpty": "Email Can't Be Empty!",
    "emailOtpSend": "OTP has been sent to your registered email address. Please verify the OTP.",
    "userCanNotLogin": "User can't login!",
    "emailNotFound": "This email does not exist in our community.Please check it out or contact to P.O.",
    //F
    //G
    //H
    //I
    "invalidEmail": "Invalid Email Format!",
    //J
    //K
    //L
    //M
    //N
    //O
    "otpEnteredIncorrect": "You have entered an incorrect OTP.",
    "otpExpired": "Your OTP has expired. Please generate a new OTP by clicking on resend OTP button.",
    "otpVerifiedSuccessfully": "OTP verified successfully.",
    //P
    "passwordNotCorrect":"Password incorrect!",
    //Q
    //R
    //S
    //T
    //U
    "userLoggedIn": "User logged in successfully!",
    //V
    //W
    //X
    //Y
    //Z
    
    "emailAlreadyVerified": "Upsss seems like this email is already verified.",

    "accountDisabledByAdmin": "Your account has been disabled for violating our Terms of Use. Please contact Administrator at for any queries.",
    "editNotificationSend": "Your Edit request has been sent to the admin. Details will be update soon after verifying from P.O.",
    "editNotificationToAdmin": "<b>@name@</b> has requested to edit his/her profile details.",
    "cvUploadSuccess": "Your CV has been uploaded successfully.",
    "dateNotAvailable": "The Date of test is not finalized by admin till now. Please contact admin.",
    "testAlreadyStart": "You are seems to be late.Test started already.",
    "emailNotVerifiedInLogin": "Your email is not verified. Please verify your email to login.",
    "noOrganisationTest": "No test for today",
    "queryAdded": "Your query has been submitted successfully.Please check email for response",
};

const statusCode={
    "ok":200,
    "bad_request":400,
    "internal_server_error":500
}

const response_status={
    "success":1,
    "failure":0
}

module.exports =  {messages,statusCode,response_status}
