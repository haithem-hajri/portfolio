const About = require('../models/About');

exports.getAbout = (req, res) => {
  About.findOne()
  .then((about) => {
    res.json(about);
  })
  .catch((err) => {
    res.send(err);
  });
} 