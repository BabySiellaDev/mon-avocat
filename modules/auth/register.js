//@ts-check
const User = require("../../models/user.model.js");
const { getPasswordAndSalt } = require("./password.js");
module.exports.register = async user => {
  let foundUserByEmail = await User.findOne({ email: user.email });
  if (foundUserByEmail && foundUserByEmail.email) throw 401;
  let { hash, salt } = getPasswordAndSalt(user.password);
  user.password = hash;
  user.salt = salt;
  User.create(user);
  return user;
};
