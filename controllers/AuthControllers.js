const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const bcrypt = require('bcrypt');

const auth = {
  registration: async (req, res) => {
    try {
      const { userName, email } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);

      const doc = Users.build({
        userName: userName,
        email: email,
        password: hash,
      });

      const user = await doc.save();

      const accessToken = jwt.sign(
        { id: user.dataValues.id, isAdmin: user.dataValues.isAdmin },
        'secret123',
        { expiresIn: '5d' }
      );

      const { password, ...userData } = user.dataValues;

      res.status(200).json({ ...userData, accessToken });
    } catch {
      (error) => {
        res.status(404).send(error);
      };
    }
  },

  logIn: async (req, res) => {
    try {
      const user = await Users.findOne({ where: { email: req.body.email } });

      if (!user) res.status(404).json({ error: 'Email or Password not found' });

      const isValidPass = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!isValidPass) {
        res.status(400).json('Wrong Email or Password');
      }

      const accessToken = jwt.sign(
        { id: user.id, isAdmin: user.isAdmin },
        'secret123',
        { expiresIn: '5d' }
      );

      const { password, ...info } = user.dataValues;

      res.status(200).send({ ...info, accessToken });
    } catch (err) {
      (error) => {
        res.status(400).send(error);
      };
    }
  },

  getUserInfo: async (req, res) => {
    try {
      const user = await Users.findByPk(req.userId);
      if (!user) res.status(404).json('User not found');
      const { password, ...info } = user.dataValues;

      res.status(200).send(info);
    } catch (err) {
      res.status(404).json('User not found');
    }
  },
};

module.exports = auth;
