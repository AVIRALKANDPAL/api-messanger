const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0//", salt);

exports.encryptPassword = ({ password }) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) reject(err);
      resolve(hash);
    });
  });
};

exports.comparePassword = ({ plainPassword, hash }) => {
  return new Promise((resolve, reject) => {
    // Load hash from the db, which was preivously stored
    bcrypt.compare(plainPassword, hash, function (err, res) {
      if (err) reject(err);
      resolve(res);
    });
  });
};
