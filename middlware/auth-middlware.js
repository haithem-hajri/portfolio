//midllwares are used to check if the user is logged in or not
//and if not logged in then redirect to login page
const jwt = require("jsonwebtoken");
const jwtSecret = "secret";
exports.requireLogin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
