const Visitor = require("../models/Visitor");

exports.addVisitor = (req, res) => {
  const {
    IPv4,
    city,
    country_code,
    latitude,
    longitude,
    postal,
    state,
    country_name,
  } = req.fields;
  Visitor.findOne({ IP: IPv4 }).then((visitor) => {
    if (visitor) {
      res.status(200).json("old");
    } else {
      newVisitor = new Visitor({
        IP: IPv4,
        city: city,
        country_code: country_code,
        country_name: country_name,
        latitude: latitude,
        longitude: longitude,
        postal: postal,
        state: state,
      });
      newVisitor.save().then((newVisitor) => {
        res.status(200).json(newVisitor);
      });
    }
  });
};
