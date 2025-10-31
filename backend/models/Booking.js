import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  experienceId: String,
  slot: String,
  totalPrice: Number,
});

export default mongoose.model("Booking", bookingSchema);
