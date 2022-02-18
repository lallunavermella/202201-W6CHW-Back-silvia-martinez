const Robot = require("../../database/models/Robots");

const getAllRobots = async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
};

module.exports = getAllRobots;
