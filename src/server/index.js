require("dotenv").config();
const debug = require("debug")("robots:server");
const chalk = require("chalk");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const robotsRouter = require("./routers/robots");
const { errorNotFound, errorDefault } = require("./middlewares/errors");

const app = express();

const upServer = (port) =>
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

app.use(morgan("dev"));

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use("/robots", robotsRouter);

app.use(errorNotFound);

app.use(errorDefault);

module.exports = upServer;
