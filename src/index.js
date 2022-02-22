require("dotenv").config();
const debug = require("debug")("robots:root");
const chalk = require("chalk");
const connectDataBase = require("./database/index");
const app = require("./server/index");
const upServer = require("./server/upServer");

const port = process.env.PORT || 4000;
const dbstring = process.env.MONGO_STRING;

(async () => {
  try {
    await connectDataBase(dbstring);
    await upServer(port, app);
  } catch (error) {
    debug(chalk.red(`Error:`, error.message));
  }
})();
