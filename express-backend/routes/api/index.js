const express = require('express')
const router = express.Router()

const userRoutes = require('./user');
const loginRoutes = require('./login');

router.use('/user', userRoutes);
router.use('/login', loginRoutes);

module.exports = router;