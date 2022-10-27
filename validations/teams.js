const { body } = require('express-validator');

const teamCreateValidation = [
  body('teamName', 'Team Name is required').isLength({ min: 2 }),
  body('city', 'Team Name is required').isLength({ min: 2 }),
  body('owner', 'Owner is not correct').isLength({
    min: 2,
  }),
  body('teamLogo').optional().isURL(),
];

module.exports = teamCreateValidation;
