const express = require('express');
const router = express.Router();
const {
  registration,
  logIn,
  getUserInfo,
} = require('../controllers/AuthControllers');

const { registerValidation, loginValidation } = require('../validations/auth');
const checkAuth = require('../utils/checkAuth');
const handleValidationErrors = require('../utils/handleValidationErrors');

router.post(
  '/registration',
  registerValidation,
  handleValidationErrors,
  registration
);

router.post('/login', loginValidation, logIn);

router.get('/me', checkAuth, getUserInfo);

module.exports = router;
