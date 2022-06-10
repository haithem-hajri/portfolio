const express = require("express");
const router = express.Router();
const { getAbout } = require("../controllers/about");

router.get("/getAbout", getAbout);

module.exports = router;
