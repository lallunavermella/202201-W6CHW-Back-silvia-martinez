const errorNotFound = (req, res) => {
  res.status(404);
  res.json({ error: true, message: "Not found" });
};

const errorDefault = (req, res) => {
  res.status(500);
  res.json({ error: true, message: "ERRRRROOOOR" });
};

module.exports = { errorNotFound, errorDefault };
