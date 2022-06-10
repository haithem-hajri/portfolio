const Education = require("../models/Education");

exports.getEducation = (req, res) => {
  Education.find()
    .sort({ createdAt: 1 })
    .then((education) => {
      res.json(education);
    })
    .catch((err) => {
      res.send(err);
    });
};
