const getAllRobots = async (req, res) => {
  const robots = await Robot.find();
  res.json({ robot });
};

module.exports = getAllRobots;
