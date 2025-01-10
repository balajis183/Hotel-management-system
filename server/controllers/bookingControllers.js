// Import necessary models
const BookingModel = require("../models/bookingSchema");
const RoomModel = require("../models/roomSchema");
const CustomerModel = require("../models/customerSchema");

// Create a new booking
const createBooking = async (req, res) => {
  const { room_id, check_in_date, check_out_date } = req.body;
  console.log(req.body);

  try {
    // Fetch the room details using ObjectId for room_id
    const room = await RoomModel.findById(room_id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    // Fetch the customer details using the authenticated user's ID
    const customerId = req.user._id;                          // The authenticated user's ID is in req.user._id
    const customer = await CustomerModel.findOne({ user_id: customerId });

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Calculate the price based on check-in and check-out dates
    const nights =
      (new Date(check_out_date) - new Date(check_in_date)) / (1000 * 3600 * 24); // Calculate number of nights
    const price = room.price * nights; // Assuming room.price is the price per night

    // Create the booking
    const booking = new BookingModel({
      room_id, // This is the ObjectId of the room
      customer_id: customer._id, // Use the _id of the customer retrieved from req.user
      check_in_date,
      check_out_date,
      price,
      status: "pending", // Initially set to "pending"
    });

    console.log(booking);
    // Save the booking to the database
    await booking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await BookingModel.find()
      .populate("customer_id", "name email") // Populate customer details only
      .populate("room_id", "hotel_name room_number type price") // Populate room details (room_number, type, price)
      .populate({
        path: "customer_id", // Populate user details from the customer
        select: "user_id", // Only get the user_id from the customer
        populate: {
          path: "user_id", // Populate user details from the User model
          select: "name email", // Include name and email fields from the User model
        },
      });

    if (!bookings.length) {
      return res.status(404).json({ message: "No bookings found" });
    }

    res.status(200).json({
      message: "All bookings retrieved successfully",
      bookings,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

const confirmBooking = async (req, res) => {
  const { booking_id } = req.params; // Booking ID passed in the URL

  try {
    // Find the booking by ID
    const booking = await BookingModel.findById(booking_id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Check if the user is authenticated and if the user is a customer (role === 1)
    if (!req.user) {
      return res.status(401).json({ message: "Authentication required" });
    }

    if (req.user.role !== 1) {
      return res
        .status(403)
        .json({ message: "Only customers can confirm a booking" });
    }

    // Check if the booking is already confirmed
    if (booking.status === "confirmed") {
      return res.status(400).json({ message: "Booking is already confirmed" });
    }

    booking.status = "confirmed";
    await booking.save();

    res.status(200).json({
      message: "Booking confirmed successfully",
      booking,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

module.exports = { createBooking, getAllBookings, confirmBooking };
