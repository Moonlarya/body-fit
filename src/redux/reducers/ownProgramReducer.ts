import { CREATE_OWN_PROGRAM } from "../types";

const initialState = {
  ownWorkout: [],
};

const ownProgramReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_OWN_PROGRAM:
      return { ...state, ownWorkout: [...state.ownWorkout, action.payload] };
    default:
      return state;
  }
};

export default ownProgramReducer;
