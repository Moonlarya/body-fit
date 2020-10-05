import { combineReducers } from "redux";
import workoutProgramReducer from "./workoutProgramReducer";
import ownProgramReducer from "./ownProgramReducer";

const rootReducer = combineReducers({
  workoutData: workoutProgramReducer,
  ownWorkoutPrograms: ownProgramReducer,
});

export default rootReducer;
