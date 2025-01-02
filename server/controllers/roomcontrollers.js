const Room = require("../models/roomSchema");

// Create a new room
const createRoom = async (req, res) => {
  try {
    const {
      hotel_name,
      room_number,
      type,
      price,
      status,
      image,
      amenities,
      description,
      max_occupancy,
      Ratings,
    } = req.body;

    // Check if the room number already exists in the hotel
    const existingRoom = await Room.findOne({ hotel_name, room_number });
    if (existingRoom) {
      return res
        .status(400)
        .json({ message: "Room number already exists in the specified hotel" });
    }

    const newRoom = new Room({
      hotel_name,
      room_number,
      type,
      price,
      status,
      image,
      amenities,
      description,
      max_occupancy,
      Ratings,
    });

    // Save the new room to the database
    await newRoom.save();

    res
      .status(201)
      .json({ message: "Room created successfully", room: newRoom });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating room", error: error.message });
  }
};

// Get all rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    if (rooms.length === 0) {
      return res.status(404).json({ message: "No rooms found" });
    }

    res.status(200).json({ message: "Rooms fetched successfully", rooms });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching rooms", error: error.message });
  }
};

module.exports = { createRoom, getAllRooms };
