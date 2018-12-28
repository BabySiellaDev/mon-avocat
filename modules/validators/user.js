module.exports.isValidUserBody = body => {
  return (
    body.email &&
    body.password &&
    body.email.length > 0 &&
    body.password.length > 0
  );
};
module.exports.isValidUserLogin = body => {
  return (
    body.email &&
    body.password &&
    body.email.length > 0 &&
    body.password.length > 0
  );
};
