const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

// Register route, /api/auth/register
router.post('/register', authController.userRegistrationController);



//login route, /api/auth/login
router.post('/login',authController.userLoginController);



module.exports = router;