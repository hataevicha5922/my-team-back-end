const express = require('express');
const router = express.Router();

const {
  createPosition,
  getPositions,
  getPlayersByPosition,
} = require('../controllers/PositionController');

router.get('/', getPositions);
router.post('/', createPosition);
router.post('/byPosition', getPlayersByPosition);

module.exports = router;
