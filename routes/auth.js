const express = require("express");
router = express.Router();
const { requireLogin } = require("../middlware/auth-middlware");
const {
  signup,
  login,
  logout,
  updateUser,
  updatePassword,
  getUser,
} = require("../controllers/auth");
const {
  userSignupValidator,
  userSigninValidator,
} = require("../validation/auth-validation");
const { runValidation } = require("../validation");
router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/login", userSigninValidator, runValidation, login);
router.get("/getUser", requireLogin, getUser);
router.post("/logout", logout);
router.put("/updateUser", requireLogin, updateUser);
router.put("/updatePassword", requireLogin, updatePassword);

module.exports = router;
