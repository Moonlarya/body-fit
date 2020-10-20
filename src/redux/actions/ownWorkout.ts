import {
  CREATE_OWN_PROGRAM,
  SET_OWN_PROGRAM,
  LOAD_OWN_WORKOUTS,
} from "../types";
import workoutProgramService from "../../services/workoutProgramService";

export const newWorkout = (workout: IWorkout) => ({
  type: CREATE_OWN_PROGRAM,
  payload: workout,
});

export const setWorkouts = (workouts: IWorkout[]) => ({
  type: LOAD_OWN_WORKOUTS,
  payload: workouts,
});

export const setWorkoutName = (workout: string) => ({
  type: SET_OWN_PROGRAM,
  payload: workout,
});

export const addWorkout = (workout: IWorkout) => {
  return async (dispatch) => {
    const newProgram = await workoutProgramService.create(workout);
    dispatch(newWorkout(newProgram));
  };
};

export const loadWorkouts = () => {
  return async (dispatch) => {
    const data = await workoutProgramService.getAll();
    dispatch(setWorkouts(data));
  };
};
