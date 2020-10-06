import { CREATE_OWN_PROGRAM, SET_OWN_PROGRAM } from "../types";

export const addWorkout = (workout: IWorkout) => ({
  type: CREATE_OWN_PROGRAM,
  payload: workout,
});

export const setWorkoutName = (workout: string) => ({
  type: SET_OWN_PROGRAM,
  payload: workout,
});
