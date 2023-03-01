const mongoose = require("mongoose");

exports.connectedToDatabase = () => {
  mongoose.connect(process.env.MONGOURL, { strictQuery: true }, () => {
    console.log(`Mongo Db Connected To ${process.env.MONGOURL}`);
  });
};
