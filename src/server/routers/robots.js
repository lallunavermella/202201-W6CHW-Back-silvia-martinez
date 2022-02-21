const express = require("express");
const {
  getAllRobots,
  getRobot,
  deleteRobot,
  createRobot,
  updateRobot,
} = require("../controllers/robotControllers");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", getAllRobots);

router.get("/:idRobot", getRobot);

router.delete("/:idRobot", auth, deleteRobot);

router.post("/create", createRobot);

router.put("/update", updateRobot);

module.exports = router;
