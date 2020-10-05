import { CREATE_OWN_PROGRAM } from "../types";

const addWorkout = (workout: IWorkout) => ({
  type: CREATE_OWN_PROGRAM,
  payload: workout,
});

export default addWorkout;
