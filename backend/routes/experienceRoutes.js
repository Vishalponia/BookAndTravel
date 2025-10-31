import express from "express";
import Experience from "../models/Experience.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Experience.find();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const exp = await Experience.findById(req.params.id);
  res.json(exp);
});

export default router;
