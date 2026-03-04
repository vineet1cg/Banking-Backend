const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

// Register route
router.post('/register', authController.userRegistrationController)

module.exports = router;