const express = require('express');
const router = express.Router();
// const { Teams } = require('../models');
// const { Users } = require('../models');
// const verify = require('../assets/verifyToken');
const {
  createTeam,
  getAllTeams,
  getMyTeam,
  changeMyTeam,
} = require('../controllers/TeamController');
const teamCreateValidation = require('../validations/teams');
const checkAuth = require('../utils/checkAuth');
const handleValidationErrors = require('../utils/handleValidationErrors');

router.get('/', getAllTeams);

router.get('/byId/:id', checkAuth, getMyTeam);

router.post(
  '/',
  checkAuth,
  teamCreateValidation,
  handleValidationErrors,
  createTeam
);

router.patch('/byId/:id', checkAuth, changeMyTeam);

module.exports = router;
