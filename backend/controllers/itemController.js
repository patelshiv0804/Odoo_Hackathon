// controllers/itemController.js
const Item = require("../schemas/itemSchema");
const logger = require("../utils/logger");
const path = require("path");
const fs = require("fs");

const addItem = async (req, res, next) => {
  try {
    console.log("=== DEBUG: In addItem controller ===");
    console.log("Files:", req.files);
    console.log("Body:", req.body);

    const {
      uploader,
      title,
      description,
      category,
      type,
      size,
      condition,
      tags,
    } = req.body;

    // Validate required fields
    if (!uploader || !title || !category || !type) {
      return res
        .status(400)
        .json({ message: "uploader, title, category, and type are required" });
    }

    // Check if files were uploaded
    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one image is required" });
    }

    // Extract unique file names and create proper paths
    const imagePaths = req.files.map(
      (file) => path.join("uploads/images", file.filename).replace(/\\/g, "/") // normalize path separators
    );

    const newItem = new Item({
      uploader,
      images: imagePaths,
      title,
      description,
      category,
      type,
      size,
      condition,
      tags: tags ? (Array.isArray(tags) ? tags : tags.split(",")) : [],
      status: "Available",
      approved: false,
    });

    await newItem.save();

    res.status(201).json({
      message: "Item listed successfully. Awaiting admin approval.",
      itemId: newItem._id,
      item: newItem,
    });
  } catch (error) {
    logger.error("Error adding item:", error);

    // Clean up uploaded files if database save fails
    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        fs.unlink(file.path, (err) => {
          if (err) logger.error("Error deleting file:", err);
        });
      });
    }

    next(error);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Delete associated image files
    if (item.images && item.images.length > 0) {
      item.images.forEach((imagePath) => {
        const fullPath = path.join(__dirname, "../", imagePath);
        fs.unlink(fullPath, (err) => {
          if (err) logger.error("Error deleting image file:", err);
        });
      });
    }

    await item.deleteOne();
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    logger.error("Error deleting item:", error);
    next(error);
  }
};

const getItemsById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if getting items by user ID or single item by ID
    let items;
    if (id.length === 24) {
      // MongoDB ObjectId length
      // Try to find single item first
      const singleItem = await Item.findById(id);
      if (singleItem) {
        return res.json({
          message: "Item found",
          item: singleItem,
        });
      }
    }

    // If not found as single item, try as user ID
    items = await Item.find({ uploader: id });

    res.json({
      message: `Found ${items.length} items for user ${id}`,
      items,
    });
  } catch (error) {
    logger.error("Error fetching items by ID:", error);
    next(error);
  }
};

// Additional helper function to get all items (useful for admin)
const getAllItems = async (req, res, next) => {
  try {
    const { userId } = req.params;
    console.log("=== DEBUG: Fetching all items for user ID ===", userId);

    if (!userId) {
      return res
        .status(400)
        .json({ message: "User ID is required in the URL parameter." });
    }

    const items = await Item.find({ uploader: userId })
      .populate("uploader", "username email") // Adjust fields if needed
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: `Found ${items.length} items uploaded by user ${userId}`,
      items,
    });
  } catch (error) {
    logger?.error?.("Error fetching items by uploader ID:", error); // optional
    next(error);
  }
};

module.exports = {
  addItem,
  deleteItem,
  getItemsById,
  getAllItems,
};
