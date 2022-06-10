// auth controllers
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "secret";
const User = require("../models/User");
const { API, APP } = require("../config/dev");

//signup user and check if user exist and crypt paswword with bcryptjs and send a success message to the client side in json format
exports.signup = (req, res) => {
  User.findOne({ "$or": [ { email: req.body.email }, { mobile: req.body.mobile} ] })
    .then((user) => {
      if (user) {
        return res.status(400).json({ user_exist: "Email or phone already exists" });
      } else {
        const newUser = new User(req.body);
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then((user) => {
              res.status(201).json("signup success");
            });
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ 
        error: err,
      });
    });
};

// login
exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ email: "Email not found" });
      }
      bcrypt
        .compare(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.name,
              email: user.email,
              mobile: user.mobile,
            };
            jwt.sign(payload, jwtSecret, { expiresIn: 3600 }, (err, token) => {
              if (err) throw err;
              res.json({
                payload,
                loggedIn: true,
                token: "Bearer " + token,
              });
            });
          } else {
            return res.status(400).json({ password: "Password incorrect" });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
// logout
exports.logout = (req, res) => {
  res.json({
    loggedIn: false,
    message: "Logged out successfully",
  });
};
// get user by token  and send user data to the client side
exports.getUser = (req, res) => {
  const { id } = req.user;
  User.findById(id)
    .then((user) => {
      res.json({
        loggedIn: true,
        payload:{ id: user.id,
          name: user.name,
          email: user.email,
          mobile: user.mobile,}
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
// get user by token and send user data to the client side

// update user
exports.updateUser = (req, res) => {
  const { name, email, mobile } = req.body;
  User.findByIdAndUpdate(req.user.id, {
    name,
    email,
    mobile,
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
// update password
exports.updatePassword = (req, res) => {
  const { password } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      User.findByIdAndUpdate(req.user.id, {
        password: hash,
      })
        .then((user) => {
          res.json(user);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        });
    });
  });
};
