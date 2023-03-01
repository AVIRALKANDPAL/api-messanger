const universalFunctions = require('../../utils/universalFunction')


exports.checkUserEmailInSystem = async (req, res, next) => {
    const {email} = req.body;
    if (email == null){
        res.status(201).json({
            message:"Enter email!",
            status:false
        })
    }else if (!universalFunctions.validateEmail(email)){
        res.status(201).json({
            message:"Invalid Email Format!",
            status:false
        })
    }else{
        next()
    }
};

exports.userLoginController = async (req, res) => {
    const {email,password} = req.body;
};


exports.validateUserEmail = async (req,res)=>{
    
}

exports.userSignUpController = async (req,res) => { 
};