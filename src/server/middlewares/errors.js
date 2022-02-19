const errorNotFound = (req, res) => {
  res.status(404);
  res.json({ error: true, message: "Not found" });
};

// eslint-disable-next-line no-unused-vars
const errorDefault = (err, req, res, next) => {
  res.status(500);
  res.json({ error: true, message: "ERRRRROOOOR" });
};

module.exports = { errorNotFound, errorDefault };
