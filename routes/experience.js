// import express
const express = require("express");
const router = express.Router();
const { getExperience } = require("../controllers/experience");
router.get("/getExperience", getExperience);

module.exports = router;
