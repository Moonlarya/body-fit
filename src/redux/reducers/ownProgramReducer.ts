import {
  CREATE_OWN_PROGRAM,
  SET_OWN_PROGRAM,
  LOAD_OWN_WORKOUTS,
} from "../types";

const initialState = {
  ownWorkout: [],
  createdWorkoutsList: [],
  selectedWorkoutName: "",
};

const ownProgramReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_OWN_PROGRAM:
      return { ...state, ownWorkout: [...state.ownWorkout, action.payload] };
    case LOAD_OWN_WORKOUTS:
      return { ...state, createdWorkoutsList: action.payload };
    case SET_OWN_PROGRAM:
      return { ...state, selectedWorkoutName: action.payload };
    default:
      return state;
  }
};

export default ownProgramReducer;
