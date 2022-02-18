const { model, Schema } = require("mongoose");

const RobotSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  imagen: { type: String },
  caracteristicas: {
    velocidad: { type: Number, min: 0, max: 10 },
    resistencia: { type: Number, min: 0, max: 10 },
    creacion: { type: Date, required: true },
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
