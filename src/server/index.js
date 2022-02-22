require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const robotsRouter = require("./routers/robots");
const usersRouter = require("./controllers/userControllers");
const { errorNotFound, errorDefault } = require("./middlewares/errors");

const app = express();

app.use(morgan("dev"));

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use("/robots", robotsRouter);

app.use("/users", usersRouter);

app.use(errorNotFound);

app.use(errorDefault);

module.exports = app;
