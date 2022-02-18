require("dotenv").config();
const debug = require("debug")("robots:root");
const chalk = require("chalk");
const connectDataBase = require("./database/index");
const upServer = require("./server/index");

const port = process.env.SERVER_PORT || 4000;
const dbstring = process.env.MONGO_STRING;

(async () => {
  try {
    await connectDataBase(dbstring);
    await upServer(port);
  } catch (error) {
    debug(chalk.red(`Error: `, error.message));
  }
})();
