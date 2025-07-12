// models/adminSchema.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // or just use isAdmin in userSchema
permissions: [{ type: String }], // e.g., ['approve_items', 'manage_users']
});

module.exports = mongoose.model('Admin', adminSchema);