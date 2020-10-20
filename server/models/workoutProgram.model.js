const mongoose = require("mongoose");

const { Schema } = mongoose;

const workoutDay = new Schema({ day: Number, workout: [String] });
const workoutProgramSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    data: { type: [workoutDay], required: true },
  },
  {
    timestamps: true,
  }
);

const workoutProgram = mongoose.model("workoutProgram", workoutProgramSchema);

module.exports = workoutProgram;
