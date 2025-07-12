// models/itemSchema.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
images: [{ type: String }], // URLs or image paths
title: { type: String, required: true },
description: { type: String },
category: { type: String, required: true }, // e.g., "Men", "Women", "Kids"
type: { type: String, required: true }, // e.g., "Shirt", "Jeans"
size: { type: String },
condition: { type: String },
tags: [{ type: String }],
status: { type: String, enum: ['Available', 'Reserved', 'Swapped'], default: 'Available' },
createdAt: { type: Date, default: Date.now },
approved: { type: Boolean, default: false }
});

module.exports = mongoose.model('Item', itemSchema);