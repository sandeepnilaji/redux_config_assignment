import {
  TODO_LOGIN_LOAD,
  TODO_LOGIN_SUCESS,
  TODO_LOGIN_ERROR,
} from "./actionTypes";

export const loginload = () => {
  return {
    type: TODO_LOGIN_LOAD,
  };
};

export const loginsucess = (data) => {
  return {
    type: TODO_LOGIN_SUCESS,
    payload: data,
  };
};

export const loginerror = (data) => {
  return {
    type: TODO_LOGIN_ERROR,
    payload: data,
  };
};
