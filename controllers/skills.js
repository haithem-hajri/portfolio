// skill controller
const express = require("express");
const Skill=require("../models/Skill")
router = express.Router();
// function return get all skills

exports.getSkills = (req, res) => {
  Skill.find()
    .then((skills) => {
      res.json(skills);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
