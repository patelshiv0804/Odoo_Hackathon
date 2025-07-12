// routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const generateUniqueFileName = require("../utils/generateUniqueFileName");

// Set up Multer disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "../uploads/images");
    fs.mkdirSync(uploadPath, { recursive: true }); // ensure folder exists
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueName = generateUniqueFileName(file.originalname);
    cb(null, uniqueName);
  },
});

// Configure multer with file filter and limits
const upload = multer({ 
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 5 // max 5 files
  },
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// Temporary debug middleware to log all fields
const debugMiddleware = (req, res, next) => {
  console.log('=== DEBUG: Incoming request ===');
  console.log('Headers:', req.headers);
  console.log('Body fields will be logged by multer...');
  next();
};

// Use upload.any() to accept any field name temporarily for debugging
router.post(
  "/add",
  debugMiddleware,
  upload.any(), // Accept any field name to debug
  (req, res, next) => {
    console.log('=== DEBUG: After multer processing ===');
    console.log('Files received:', req.files);
    console.log('Body received:', req.body);
    console.log('File fields:', req.files?.map(f => f.fieldname));
    next();
  },
  itemController.addItem
);

router.delete("/remove/:id", itemController.deleteItem);
router.get("/get/:id", itemController.getItemsById);
router.get("/all/:userId", itemController.getAllItems);

// Test route to debug form data
router.post("/test-upload", (req, res) => {
  console.log('=== TEST UPLOAD ENDPOINT ===');
  console.log('Content-Type:', req.headers['content-type']);
  console.log('Raw body preview:', req.body);
  
  // Simple raw body logging
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  
  req.on('end', () => {
    console.log('Raw body:', body.substring(0, 500) + '...');
    res.json({ message: 'Test endpoint - check console logs' });
  });
});

module.exports = router;