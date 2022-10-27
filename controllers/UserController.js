const { Users } = require('../models');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const listOfUsers = await Users.findAll();
      res.status(200).send(listOfUsers);
    } catch (error) {
      console.log(error);
      res.status(400).json('Users not found');
    }
  },
  getUserInfo: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await Users.findByPk(id);
      const { password, ...info } = user.dataValues;
      res.json(info);
    } catch (error) {
      console.log(error);
      res.status(400).json('User not found');
    }
  },
};

module.exports = userController;
