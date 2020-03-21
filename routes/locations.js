const express = require("express");
const router = express.Router();
const {
  getLocations,
  addLocation,
  deleteLocations
} = require("../controllers/locations");

router
  .route("/")
  .get(getLocations)
  .post(addLocation)
  .delete(deleteLocations);

module.exports = router;
