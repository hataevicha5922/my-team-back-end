const { Positions, Players } = require('../models');

const positionController = {
  createPosition: async (req, res) => {
    try {
      const { positionName } = req.body;

      const doc = Positions.build({
        position: positionName,
      });

      const position = await doc.save();
      res.status(200).json(position);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },

  getPositions: async (req, res) => {
    try {
      const listOfPositions = await Positions.findAll();
      res.send(listOfPositions);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  getPlayersByPosition: async (req, res) => {
    try {
      const players = await Players.findAll({
        where: { position: req.body.positionName },
      });

      if (!players) res.status(404).json({ error: 'Players not found' });

      res.status(200).send(players);
    } catch (err) {
      (error) => {
        res.status(400).send(error);
      };
    }
  },
};

module.exports = positionController;
