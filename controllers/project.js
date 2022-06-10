const Project = require("../models/Project");
exports.getProjects = (req, res) => {
  const { page } = req.query;
  const options = {
    page: page,
    limit: 6,
  };
  Project.paginate({}, options, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
    res.json(result);
  });
};
