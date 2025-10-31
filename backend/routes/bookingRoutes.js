import express from "express";
import Booking from "../models/Booking.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.json({ success: true, booking });
  } catch {
    res.status(400).json({ success: false });
  }
});

export default router;
