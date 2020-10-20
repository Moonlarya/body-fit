const router = require("express").Router();

const workoutProgram = require("../models/workoutProgram.model.js");

class WorkoutProgramService {
  static findAll() {
    return workoutProgram.find();
  }

  static create(data) {
    const newWorkoutProgram = new workoutProgram(data);

    return newWorkoutProgram.save();
  }
}

router.route("/").get(async (req, res) => {
  try {
    const data = await WorkoutProgramService.findAll();
    res.json(data);
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

router.route("/:workoutProgramId").get((req, res) => {
  workoutProgram
    .findById(req.params.workoutProgramId)
    .then((workoutPrograms) => res.json(workoutPrograms))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:workoutProgramId").delete((req, res) => {
  workoutProgram
    .findByIdAndRemove(req.params.workoutProgramId)
    .then((workoutPrograms) => res.json(workoutPrograms))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post(async (req, res) => {
  try {
    const { name, data } = req.body;

    const document = await WorkoutProgramService.create({ name, data });
    res.json(document);
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
});

module.exports = router;
