const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const robots = await Robot.find();
  res.status(200);
  res.json({ robots });
});
