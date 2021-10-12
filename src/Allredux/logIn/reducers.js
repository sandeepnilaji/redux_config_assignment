import {
  TODO_LOGIN_LOAD,
  TODO_LOGIN_SUCESS,
  TODO_LOGIN_ERROR,
} from "./actionTypes";

const initial = {
  isloading: false,
  iserror: false,
  token: "",
};

export const loginreducer = (state = initial, { type, payload }) => {
  switch (type) {
    case TODO_LOGIN_LOAD:
      return {
        ...state,
        isloading: true,
      };
    case TODO_LOGIN_SUCESS:
      return {
        ...state,
        isloading: false,
        token: payload,
      };
    case TODO_LOGIN_ERROR:
      return {
        ...state,
        isloading: false,
        iserror: true,
      };
    default:
      return {
        ...state,
      };
  }
};
