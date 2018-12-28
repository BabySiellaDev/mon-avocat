//@ts-check
const User = require("../../models/user.model.js");
const { getPasswordAndSalt } = require("../../modules/auth/password.js");

module.exports.updateProfile = async (userId, newUser) => {
  delete newUser.password;
  delete newUser.salt;
  delete newUser._id;
  return User.findByIdAndUpdate(userId, newUser, { new: true });
};
module.exports.updatePassword = async (userId, newPassword) => {
  let { hash: password, salt } = getPasswordAndSalt(newPassword);
  return User.findByIdAndUpdate(userId, { password, salt }, { new: true });
};
