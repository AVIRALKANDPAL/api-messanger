const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    age: { type: String, },
    profilePicture: {
        type: String,
        default: "../../utils/images/avatar.png"
    },
    password: { type:String, required:true},
    isActive: {type: Boolean, default:false},
    lastActive: {type: Date}
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;