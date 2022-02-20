const express = require("express");
const {
  getAllRobots,
  getRobot,
  deleteRobot,
} = require("../controllers/robotControllers");

const router = express.Router();

router.get("/", getAllRobots);

router.get("/:idRobot", getRobot);

router.delete("/:idRobot", deleteRobot);

module.exports = router;
