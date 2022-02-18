const express = require("express");
const getAllRobots = require("../controllers/robotControllers");

const router = express.Router();

router.get("/", getAllRobots);

module.exports = router;
