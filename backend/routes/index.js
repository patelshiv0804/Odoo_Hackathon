const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes'); // Assuming userRoutes is defined in userRoutes.js
router.use('/users', userRoutes);
module.exports = router;
