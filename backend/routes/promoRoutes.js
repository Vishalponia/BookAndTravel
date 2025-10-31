import express from "express";
import Promo from "../models/Promo.js";
const router = express.Router();

router.post("/validate", async (req, res) => {
  const { code } = req.body;
  const promo = await Promo.findOne({ code });
  if (promo) res.json({ valid: true, discount: promo.discount });
  else res.json({ valid: false });
});

export default router;
