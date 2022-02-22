require("dotenv").config();
const debug = require("debug")("robots:server");
const chalk = require("chalk");

const upServer = (port, app) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(
        chalk.yellow(`Server listening on http://localhost:${port}/robots`)
      );
      resolve();
    });

    server.on("error", (error) => {
      reject(error);
    });
  });

module.exports = upServer;
