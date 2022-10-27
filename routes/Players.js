const express = require('express');
const router = express.Router();
const playerCreateValidation = require('../validations/players');
const {
  getAllPlayers,
  getMyPlayers,
  getPlayer,
  deletePlayer,
  createPlayer,
  buyPlayer,
  getPlayerByPosition,
} = require('../controllers/PlayerController');
const checkAuth = require('../utils/checkAuth');
const handleValidationErrors = require('../utils/handleValidationErrors');

router.get('/', getAllPlayers);

router.get('/:teamId', checkAuth, getMyPlayers);

router.get('/byId/:id', checkAuth, getPlayer);

router.get('/byPosition/:position', checkAuth, getPlayerByPosition);

router.delete('/byId/:id', checkAuth, deletePlayer);

router.post(
  '/',
  checkAuth,
  playerCreateValidation,
  handleValidationErrors,
  createPlayer
);

router.patch('/byId/:id', checkAuth, buyPlayer);

module.exports = router;
