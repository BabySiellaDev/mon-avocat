//@ts-check
const router = require("express").Router();
const { formatUser } = require("../modules/formatters/user.js");
const {
  isValidUserBody,
  isValidUserLogin
} = require("../modules/validators/user.js");
const {
  updateProfile,
  updatePassword
} = require("../modules/users/profile.js");
router.patch("/", async (req, res) => {
  try {
    if (!isValidUserBody(req.body)) throw 400;
    let user = formatUser(req.body);
    return res
      .status(202)
      .send(await updateProfile("5c26745357ace26bd24574fa", user));
  } catch (err) {
    if (typeof err === "number") {
      return res.status(err).send();
    } else {
      console.error(err);
      return res.status(500).send();
    }
  }
});
router.put("/password", async (req, res) => {
  try {
    if (!isValidUserLogin(req.body)) throw 400;
    let user = formatUser(req.body);
    return res
      .status(202)
      .send(await updatePassword("5c26745357ace26bd24574fa", user.password));
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
