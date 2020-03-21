const Location = require("../models/Location");
// @desc    Get all locations
// @route   GET /api/locations
// @access  Public
exports.getLocations = async (req, res, next) => {
  try {
    const locations = await Location.find();
    return res.status(200).json({
      success: true,
      count: locations.length,
      data: locations
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error"
    });
  }
};

// @desc    Add location
// @route   POST /api/locations
// @access  Public
exports.addLocation = async (req, res, next) => {
  try {
    const location = await Location.create(req.body);
    return res.status(201).json({
      success: true,
      data: location
    });
  } catch (err) {
    if (err.name == "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server error"
      });
    }
  }
};

// @desc    Delete all locations
// @route   DELETE /api/locations
// @access  Public
exports.deleteLocations = async (req, res, next) => {
  try {
    await Location.deleteMany({});
    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error"
    });
  }
};
