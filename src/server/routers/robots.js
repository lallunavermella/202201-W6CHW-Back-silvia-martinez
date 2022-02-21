const express = require("express");
const {
  getAllRobots,
  getRobot,
  deleteRobot,
  createRobot,
  updateRobot,
} = require("../controllers/robotControllers");

const router = express.Router();

router.get("/", getAllRobots);

router.get("/:idRobot", getRobot);

router.delete("/:idRobot", deleteRobot);

router.post("/create", createRobot);

router.put("/update", updateRobot);

module.exports = router;
