const Robot = require("../../database/models/Robot");

const getAllRobots = async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
};

const getRobot = async (req, res, next) => {
  const { idRobot } = req.params;
  try {
    const robot = await Robot.findById(idRobot);
    if (robot) {
      res.json(robot);
    } else {
      const error = new Error("Robot not found");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
};

const deleteRobot = async (req, res, next) => {
  const { idRobot } = req.params;
  try {
    const robot = await Robot.findByIdAndDelete(idRobot);
    if (robot) {
      res.json({ robot });
    } else {
      const error = new Error("Robot not found");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
};

const createRobot = async (req, res) => {
  const newRobot = req.body;
  const createdRobot = await Robot.create(newRobot);
  res.status(201);
  res.json(createdRobot);
};

module.exports = { getAllRobots, getRobot, deleteRobot, createRobot };
