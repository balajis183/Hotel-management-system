const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    hotel_name: {
      type: String,
      required: true,
      unique: true,
    },

    room_number: {
      type: String,
      required: true,
      unique: true, // Ensures room number is unique
    },
    type: {
      type: String,
      required: true,
      enum: ["Single", "Double", "Suite", "Penthouse"], // Room types
    },
    price: {
      type: Number,
      required: true, // Price per night
    },
    status: {
      type: String,
      enum: ["Available", "Booked", "Maintenance"], // Room status
      default: "Available",
    },
    image: {
      type: String, // URL or Path to the image
      required: false, // Optional, only if you allow images
    },
    amenities: [String], // e.g., Wi-Fi, AC, TV, etc.
    description: {
      type: String,
      required: false, // Optional description of the room
    },
    max_occupancy: {
      type: Number,
      required: true,
      min: [1, "Minimum occupancy is 1"], // Ensures at least one person can stay in the room
    },

    Ratings: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
