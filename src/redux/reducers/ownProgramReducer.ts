import { SET_OWN_PROGRAM, LOAD_OWN_WORKOUTS } from "../types";

const initialState = {
  createdWorkoutsList: [],
  selectedWorkoutName: "",
};

const ownProgramReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_OWN_WORKOUTS:
      return { ...state, createdWorkoutsList: action.payload };
    case SET_OWN_PROGRAM:
      return { ...state, selectedWorkoutName: action.payload };
    default:
      return state;
  }
};

export default ownProgramReducer;
