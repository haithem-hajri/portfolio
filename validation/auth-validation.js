
// declare express validator
const { check, validationResult } = require("express-validator");


exports.userSignupValidator = [
  check('name')
  .notEmpty()
      .withMessage('Name is required'),
  check('email')
      .isEmail()
      .withMessage('Must be a valid email address'),
  check("mobile", "Mobile is required").notEmpty(),
  check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
      //confirme password 
  check('confirmPassword')
      .custom((value, { req }) => {
        if(value ==="") {
          throw new Error('Confirm Password is required');
        }
        if (value !== req.body.password) {
          throw new Error("Password confirmation is incorrect");
        } else {
          return value;
        }
      }),

];

exports.userSigninValidator = [
  check('email')
      .isEmail()
      .withMessage('Must be a valid email address'),
  check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long')
];
exports.updateUserValidator = (req, res, next) => {
  check("name", "Name is required").notEmpty();
  check("email", "Email is required").notEmpty();
  check("email", "Email is not valid").isEmail();
  check("mobile", "Mobile is required").notEmpty();
  check("mobile", "Mobile is not valid").isLength({
    min: 10,
    max: 10,
  });
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}
exports.updatePasswordValidator = (req, res, next) => {
  check("password", "Password is required").notEmpty();
  check("password", "Password must be at least 6 characters").isLength({
    min: 6,
  });
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}