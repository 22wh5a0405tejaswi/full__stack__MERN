const express = require('express');
const router = express.Router();
const submitController = require('../controllers/submitController');
const { ensureAuthenticated } = require('../config/authMiddleware');

router.post('/', ensureAuthenticated, submitController.submitForm);

module.exports = router;
