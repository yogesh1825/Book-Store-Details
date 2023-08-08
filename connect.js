const mongoose = require("mongoose");

const db = async () => {
  console.log("db connecting");
  await mongoose.connect(
    "mongodb+srv://kumavatyogesh92:Practice@cluster0.fdh3qtj.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("db connected successfully");
};
module.exports = db;
