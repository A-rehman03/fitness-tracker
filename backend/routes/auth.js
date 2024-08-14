const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const authMiddleware = require('../middleware/auth');

// Register route
router.post('/register', [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
], async (req, res) => {
  // Registration logic
});

// Login route
router.post('/login', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], async (req, res) => {
  // Login logic
});

module.exports = router;
