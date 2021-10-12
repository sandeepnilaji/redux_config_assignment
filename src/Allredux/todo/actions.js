import {
  ADD_TODO_ERROR,
  ADD_TODO_LOAD,
  ADD_TODO_SUCESS,
  GET_TODO_ERROR,
  GET_TODO_LOAD,
  GET_TODO_SUCESS,
} from "./actionTypes";

export const addload = () => {
  return { type: ADD_TODO_LOAD };
};
export const addsucess = (data) => {
  return { type: ADD_TODO_SUCESS, payload: data };
};
export const adderr = (err) => {
  return { type: ADD_TODO_ERROR, payload: err };
};

export const getload = () => {
  return { type: GET_TODO_LOAD };
};
export const getsucess = (data) => {
  return { type: GET_TODO_SUCESS, payload: data };
};
export const geterr = (err) => {
  return { type: GET_TODO_ERROR, payload: err };
};
