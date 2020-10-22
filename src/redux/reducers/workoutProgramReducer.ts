import {
  SET_CHLOYA_TING_DATA,
  SET_CHLOYA_TING_PROGRAMS,
  SET_MAIN_PROGRAM,
} from "../types";

const initialState = {
  data: [],
  programs: [],
  isMain: false,
};

const workoutProgram = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHLOYA_TING_DATA:
      return { ...state, data: action.payload };
    case SET_CHLOYA_TING_PROGRAMS:
      return { ...state, programs: action.payload };
    case SET_MAIN_PROGRAM:
      return { ...state, isMain: action.payload };
    default:
      return state;
  }
};

export default workoutProgram;
