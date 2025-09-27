const express = require('express');
const { signup, login } = require('../controllers/authcontroller');
const router = express.Router();
const authMiddleware = require('../middleware/authmiddleware');


// public routes
router.post('/signup', signup);
router.post('/login', login);

// example a protected route
router.get('/protected', authMiddleware, (req, res) => {
    res.json({message: `Hello user ${req.user}, you have accessed a protected route!` , userId: req.user});
});

module.exports = router;

