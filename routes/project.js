const express = require("express");
router = express.Router();
const { getProjects } = require("../controllers/project");

router.get("/getProjects", getProjects);
//export the router object for use in server.js
module.exports = router;





