const express = require("express");
const router = express.Router();
const { createRoom, getAllRooms } = require("../controllers/roomcontrollers");

// Create a room
router.post("/create-room", createRoom);

// Get all rooms
router.get("/get-all-rooms", getAllRooms);

module.exports = router;
