const { model, Schema } = require("mongoose");

const RobotSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  imagen: { type: URL },
  caracteristicas: {
    Velocidad: { type: Number, min: 0, max: 10 },
    Resistencia: { type: Number, min: 0, max: 10 },
    "Fecha de creacion": { type: Date, required: true },
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
