// models/swapRequestSchema.js
const mongoose = require('mongoose');

const swapRequestSchema = new mongoose.Schema({
requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
itemRequested: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
itemOffered: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
status: {
type: String,
enum: ['Pending', 'Accepted', 'Rejected', 'Cancelled'],
default: 'Pending'
},
createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SwapRequest', swapRequestSchema);