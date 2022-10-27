const { Teams, Users } = require('../models');

const teamController = {
  createTeam: async (req, res) => {
    try {
      const { teamName, city, owner, teamLogo } = req.body;
      console.log(teamName);
      const doc = Teams.build({
        teamName: teamName,
        city: city,
        owner: owner,
        teamLogo: teamLogo,
      });

      const team = await doc.save();
      res.status(200).json(team);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },

  getAllTeams: async (req, res) => {
    try {
      const listOfTeams = await Teams.findAll();
      res.send(listOfTeams);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  getMyTeam: async (req, res) => {
    try {
      const id = req.params.id;
      if (id !== req.body.TeamId) {
        res.status(404).json('Page Not Found');
      }
      const team = await Teams.findByPk(id);
      res.json(team);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  changeMyTeam: async (req, res) => {
    try {
      const id = req.body.id;
      await Users.update(
        {
          TeamId: req.params.id,
        },
        { where: { id: id } }
      );

      let user = await Users.findByPk(id);
      res.json(user);
    } catch (error) {}
  },
};

module.exports = teamController;
