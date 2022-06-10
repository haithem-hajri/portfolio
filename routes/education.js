const express = require("express");
const router = express.Router();
const { getEducation } = require("../controllers/education");

router.get("/getEducations", getEducation);

module.exports = router;
