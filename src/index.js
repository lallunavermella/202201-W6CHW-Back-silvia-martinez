require("dotenv").config();
const debug = require("debug")("robots:root");
const chalk = require("chalk");

const upServer = require("./server/index");

const port = process.env.SERVER_PORT || 4000;

(async () => {
  try {
    await upServer(port);
  } catch (error) {
    debug(chalk.red(`Error: `, error.message));
  }
})();
