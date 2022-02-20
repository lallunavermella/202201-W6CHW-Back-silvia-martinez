const express = require("express");
const {
  getAllRobots,
  getRobot,
  deleteRobot,
  createRobot,
} = require("../controllers/robotControllers");

const router = express.Router();

router.get("/", getAllRobots);

router.get("/:idRobot", getRobot);

router.delete("/:idRobot", deleteRobot);

router.post("/create", createRobot);

module.exports = router;
