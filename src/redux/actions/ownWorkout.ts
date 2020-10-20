import { CREATE_OWN_PROGRAM, SET_OWN_PROGRAM } from "../types";
import workoutProgramService from "../../services/workoutProgramService";

export const newWorkout = (workout: IWorkout) => ({
  type: CREATE_OWN_PROGRAM,
  payload: workout,
});

export const addWorkout = (workout: IWorkout) => {
  return async (dispatch) => {
    const newProgram = await workoutProgramService.create(workout);
    dispatch(newWorkout(newProgram));
  };
};

export const setWorkoutName = (workout: string) => ({
  type: SET_OWN_PROGRAM,
  payload: workout,
});
