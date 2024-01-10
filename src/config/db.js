require("dotenv").config();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
module.exports = () => {

  return mongoose.connect(
    `mongodb+srv://nikeshsingh54321:${process.env.MDB_PASSWRD}@daredevils.qrqoone.mongodb.net/user?retryWrites=true&w=majority`
  );
};