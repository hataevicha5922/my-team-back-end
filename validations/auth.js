const { body } = require('express-validator');

const authValidation = {
  registerValidation: [
    body('userName', 'userName is required').isLength({ min: 2 }),
    body('email', 'Email is not correct').isEmail(),
    body('password', 'Password must be at least 5 characters ').isLength({
      min: 5,
    }),
    body('isAdmin').optional().isBoolean(),
    body('userAvatar').optional().isURL(),
  ],

  loginValidation: [
    body('email', 'Email is not correct').isEmail(),
    body('password', 'Password must be at least 5 characters ').isLength({
      min: 5,
    }),
  ],
};

module.exports = authValidation;
