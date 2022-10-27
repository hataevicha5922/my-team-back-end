const { body } = require('express-validator');

const playerCreateValidation = [
  body('playerName', 'Player Name is required').isLength({ min: 2 }),
  body('position', 'Player Position is required').isLength({ min: 2 }),
  body('status', 'Player status is not correct').isLength({
    min: 2,
  }),
  body('avatarUrl').optional().isURL(),
];

module.exports = playerCreateValidation;
