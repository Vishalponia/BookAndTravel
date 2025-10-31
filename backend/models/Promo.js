import mongoose from "mongoose";

const promoSchema = new mongoose.Schema({
  code: String,
  discount: Number, 
});

export default mongoose.model("Promo", promoSchema);
