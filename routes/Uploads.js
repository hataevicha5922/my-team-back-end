const express = require('express');
const router = express.Router();
const upload = require('../assets/multerConfig');
const uploadImage = require('../controllers/UploadsController');

const checkAuth = require('../utils/checkAuth');

router.post('/', checkAuth, upload.single('image'), uploadImage);

module.exports = router;
