const mongoose = require("mongoose");

const dbConnection = (callback) => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to Mongodb");
      callback();
    })
    .catch((error) => {
      console.log("ERRORRR!!!! : ", error);
    });
};

module.exports = dbConnection;
