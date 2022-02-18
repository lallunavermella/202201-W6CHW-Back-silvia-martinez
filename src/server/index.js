require("dotenv").config();
const debug = require("debug")("robots:server");
const chalk = require("chalk");
const express = require("express");
const { errorNotFound, errorDefault } = require("./middlewares/errors");

const app = express();

const upServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.yellow(`Server listening on http://localhost:${port}`));
      resolve();
    });

    server.on("error", (error) => {
      reject(error);
    });
  });

app.use(errorNotFound);

app.use(errorDefault);

module.exports = upServer;
