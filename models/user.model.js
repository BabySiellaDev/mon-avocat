const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    password: String,
    salt: String,
    firstName: String,
    lastName: String
  })
);

module.exports = User;
