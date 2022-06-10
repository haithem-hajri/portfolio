const Experience = require("../models/Experience");

exports.getExperience = (req, res) => {
  Experience.find()
    .then((experience) => {
      res.json(experience);
    })
    .catch((err) => {
      res.json(err);
    });
};
