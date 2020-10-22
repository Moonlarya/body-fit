import {
  SET_OWN_PROGRAM,
  LOAD_OWN_WORKOUTS,
  SET_MAIN_OWN_PROGRAM,
} from "../types";

const initialState = {
  createdWorkoutsList: [],
  selectedWorkoutName: "",
  isMain: false,
};

const ownProgramReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_OWN_WORKOUTS:
      return { ...state, createdWorkoutsList: action.payload };
    case SET_OWN_PROGRAM:
      return { ...state, selectedWorkoutName: action.payload };
    case SET_MAIN_OWN_PROGRAM:
      return { ...state, isMain: action.payload };
    default:
      return state;
  }
};

export default ownProgramReducer;
