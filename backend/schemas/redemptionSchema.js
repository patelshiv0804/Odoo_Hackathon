// models/redemptionSchema.js
const mongoose = require('mongoose');

const redemptionSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
pointsUsed: { type: Number, required: true },
status: {
type: String,
enum: ['Pending', 'Fulfilled', 'Cancelled'],
default: 'Pending'
},
createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Redemption', redemptionSchema);