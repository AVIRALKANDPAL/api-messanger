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
    profilePicture: {
        type: Object,
        default: {"path":"public/images/profile/avatar.png"}
    },
    password: { type: String, required: true },
    lastActive: { type: Date },
    whoCanSeeLastSeen: { type: Number, required: true, default: 1 },
    lastSeenList: { type: Array, required: true },
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;