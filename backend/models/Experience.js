import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  slots: [String], 
});

export default mongoose.model("Experience", experienceSchema);
