const express = require('express');
const router = express.Router();
const {
  createTeam,
  getAllTeams,
  getMyTeam,
  getTeamInfo,
  changeMyTeam,
} = require('../controllers/TeamController');
const teamCreateValidation = require('../validations/teams');
const checkAuth = require('../utils/checkAuth');
const handleValidationErrors = require('../utils/handleValidationErrors');

router.get('/', getAllTeams);

router.get('/byId/:id', checkAuth, getMyTeam);
router.post('/:id', checkAuth, getTeamInfo);

router.post(
  '/',
  checkAuth,
  teamCreateValidation,
  handleValidationErrors,
  createTeam
);

router.patch('/byId/:id', checkAuth, changeMyTeam);

module.exports = router;
