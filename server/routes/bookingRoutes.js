const express = require("express");
const router = express.Router();

const {
  createBooking,
  getAllBookings,
  confirmBooking,
} = require("../controllers/bookingControllers");


const  authenticateToken=require("../middlewares/userMiddleware");

//  POST route to create a new booking
router.post("/create-booking",authenticateToken, createBooking);

// GET route to fetch all bookings
router.get("/get-bookings", getAllBookings);

router.put("/confirm-booking/:booking_id",authenticateToken, confirmBooking);

module.exports = router;
