const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes'); // Assuming userRoutes is defined in userRoutes.js
const itemRoutes = require('./itemRoutes'); // Assuming itemRoutes is defined in itemRoutes.js
router.use('/users', userRoutes);
router.use('/items', itemRoutes); // Assuming itemRoutes is defined in itemRoutes.js   
module.exports = router;
