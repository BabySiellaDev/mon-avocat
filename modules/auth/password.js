const bcrypt = require("bcryptjs");

module.exports.getPasswordAndSalt = password => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return { hash, salt };
};
module.exports.verifyPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
