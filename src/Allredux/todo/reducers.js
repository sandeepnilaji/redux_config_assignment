import {
  ADD_TODO_ERROR,
  ADD_TODO_LOAD,
  ADD_TODO_SUCESS,
  GET_TODO_ERROR,
  GET_TODO_LOAD,
  GET_TODO_SUCESS,
} from "./actionTypes";

const initialstate = {
  isloading: false,
  iserror: false,
  data: [],
};

export const todoreducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOAD:
      return {
        ...state,
        isloading: true,
      };
    case ADD_TODO_SUCESS:
      return {
        ...state,
        isloading: false,
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        isloading: false,
        iserror: true,
      };
    case GET_TODO_LOAD:
      return {
        ...state,
        isloading: true,
      };
    case GET_TODO_SUCESS:
      return {
        ...state,
        isloading: false,
        data: [...payload],
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        isloading: false,
        iserror: true,
      };
    default:
      return { ...state };
  }
};
