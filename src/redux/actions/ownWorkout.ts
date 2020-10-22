import {
  SET_OWN_PROGRAM,
  LOAD_OWN_WORKOUTS,
  SET_MAIN_OWN_PROGRAM,
} from "../types";
import workoutProgramService from "../../services/workoutProgramService";

export const setWorkouts = (workouts: IWorkout[]) => ({
  type: LOAD_OWN_WORKOUTS,
  payload: workouts,
});

export const setWorkoutName = (workout: string) => ({
  type: SET_OWN_PROGRAM,
  payload: workout,
});

export const setMainOwnWorkout = (status) => ({
  type: SET_MAIN_OWN_PROGRAM,
  payload: status,
});

export const addWorkout = (workout: IWorkout) => {
  return async () => {
    await workoutProgramService.create(workout);
  };
};

export const loadWorkouts = () => {
  return async (dispatch) => {
    const data = await workoutProgramService.getAll();
    dispatch(setWorkouts(data));
  };
};
