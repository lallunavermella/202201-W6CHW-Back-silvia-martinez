const Robot = require("../../database/models/Robot");

const getAllRobots = async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
};

const getRobot = async (req, res) => {
  const robot = await Robot.findById(req.params.idRobot);
  res.status(200);
  res.json({ robot });
};

module.exports = { getAllRobots, getRobot };
