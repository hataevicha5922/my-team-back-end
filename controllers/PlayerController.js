const { Players } = require('../models');

const playerController = {
  getAllPlayers: async (req, res) => {
    try {
      const listOfPlayers = await Players.findAll();
      res.send(listOfPlayers);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  getMyPlayers: async (req, res) => {
    try {
      const teamId = req.params.teamId;
      const players = await Players.findAll({ where: { TeamId: teamId } });
      res.json(players);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  getPlayerByPosition: async (req, res) => {
    try {
      const position = req.body.position;
      const players = await Players.findAll({ where: { position: position } });
      res.json(players);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  getPlayer: async (req, res) => {
    try {
      const id = req.params.id;
      const player = await Players.findByPk(id);
      res.json(player);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  deletePlayer: async (req, res) => {
    try {
      const id = req.params.id;
      const player = await Players.destroy(id);
      res.json(player);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  createPlayer: async (req, res) => {
    try {
      const player = req.body;

      await Players.create(player);
      res.json(player);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  buyPlayer: async (req, res) => {
    try {
      const id = req.params.id;
      await Players.update(
        {
          TeamId: req.body.teamId,
          status: 'Not free',
        },
        { where: { id: id } }
      );

      let player = await Players.findByPk(id);
      res.json(player);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
};

module.exports = playerController;
