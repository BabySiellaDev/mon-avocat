module.exports.formatUser = body => {
  let user = {
    email: body.email ? body.email : null,
    password: body.password ? body.password : null,
    firstName: body.firstName ? body.firstName : null,
    lastName: body.lastName ? body.lastName : null
  };
  return user;
};
