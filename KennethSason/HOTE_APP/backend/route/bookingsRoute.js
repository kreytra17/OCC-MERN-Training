const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const moment = require("moment");
const Room = require("../models/room");
router.post("/bookroom", async (req, res) => {
  const { room, userId, fromDate, toDate, totalAmount, totalDays } = req.body;
  try {
    const newBooking = new Booking({
      room: room.name,
      roomid: room._id,
      userId,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      transactionId: "123",
    });

    const booking = await newBooking.save();
    const roomtemp = await Room.findOne({ _id: room._id });
    roomtemp.currentbookings.push({
      bookingid: booking._id,
      fromDate,
      toDate,
      userId,
      status: booking.status,
      totalAmount,
    });
    await roomtemp.save();
    console.log("BOOKED SUCCESSFULLY");
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
