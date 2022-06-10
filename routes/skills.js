const express = require("express");
router = express.Router();
const { getSkills } = require("../controllers/skills");

router.get("/getSkills", getSkills);
//export the router object for use in server.js
module.exports = router;
