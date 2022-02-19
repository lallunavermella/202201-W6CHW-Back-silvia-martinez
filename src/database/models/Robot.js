const { model, Schema } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: { type: String },
  caractheristics: {
    velocity: { type: Number, min: 0, max: 10 },
    resistence: { type: Number, min: 0, max: 10 },
    creation: { type: Date, required: true },
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
