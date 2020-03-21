const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  longitude: {
    type: String,
    trim: true
  },
  latitude: {
    type: String,
    trim: true
  },
  altitude: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Location", LocationSchema);
