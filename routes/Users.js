const express = require('express');
const router = express.Router();
const { getAllUsers, getUserInfo } = require('../controllers/UserController');
const checkAuth = require('../utils/checkAuth');

router.get('/', checkAuth, getAllUsers);

router.get('/byId/:id', checkAuth, getUserInfo);

module.exports = router;
