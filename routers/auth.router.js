//@ts-check
const router = require("express").Router();
const { register } = require("../modules/auth/register.js");
const { login } = require("../modules/auth/login.js");
const { formatUser } = require("../modules/formatters/user.js");
const {
  isValidUserBody,
  isValidUserLogin
} = require("../modules/validators/user.js");
router.post("/register", async (req, res) => {
  try {
    if (!isValidUserBody(req.body)) throw 400;
    let user = formatUser(req.body);
    user = await register(user);
    return res.status(201).send(user);
  } catch (err) {
    if (typeof err === "number") {
      return res.status(err).send();
    } else {
      console.error(err);
      return res.status(500).send();
    }
  }
});
router.post("/login", async (req, res) => {
  try {
    if (!isValidUserLogin(req.body)) throw 400;
    let user = formatUser(req.body);
    user = await login(user);
    if (!user) throw 401;
    req.session.user = user;
    return res.status(200).send(user);
  } catch (err) {
    if (typeof err === "number") {
      return res.status(err).send();
    } else {
      console.error(err);
      return res.status(500).send();
    }
  }
});
module.exports = router;
