const express = require("express");
const { getAllRobots, getRobot } = require("../controllers/robotControllers");

const router = express.Router();

router.get("/", getAllRobots);

router.get("/:idRobot", getRobot);

module.exports = router;
