const multer = require("multer");

const profilePictureStorage = multer.diskStorage({
    destination: './public/images/profile',
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname);
    },
});

const profilePictureUpload = multer({ storage: profilePictureStorage });

exports.uploadSingleProfile = () => {
    return profilePictureUpload.single('avatar');
}