const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');


// public routes
router.post('/signup', signup);
router.post('/login', login);

// example a protected route
router.get('/protected', authMiddleware, (req, res) => {
    res.json({message: `Hello user ${req.user}, you have accessed a protected route!` , userId: req.user});
});

// get current user info
router.get('/me', authMiddleware, (req, res) => {
    res.json({userId: req.user});
});

module.exports = router;

