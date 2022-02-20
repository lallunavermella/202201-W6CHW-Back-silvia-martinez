const express = require("express");
const {
  getAllRobots,
  getRobot,
  deleteRobot,
  createdRobot,
} = require("../controllers/robotControllers");

const router = express.Router();

router.get("/", getAllRobots);

router.get("/:idRobot", getRobot);

router.delete("/:idRobot", deleteRobot);

router.post("/created", createdRobot);

module.exports = router;
