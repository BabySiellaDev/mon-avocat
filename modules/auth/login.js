//@ts-check
const User = require("../../models/user.model.js");
const { verifyPassword } = require("../auth/password.js");

module.exports.login = async ({ email, password }) => {
  let user = await User.findOne({ email });
  return verifyPassword(password, user.password) ? user : null;
};
