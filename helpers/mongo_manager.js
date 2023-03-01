const mongoose = require("mongoose");

exports.connectedToDatabase = async () => {
  try {
    console.log("================================ Connecting to database");
    const result = await mongoose.connect(process.env.MONGOURL);
    console.log("Connected to Mongoose");
  }catch(e) {
    console.log(`Error connecting to Mongo ${e.message}`);
  }
};
