import { createStore, combineReducers } from "redux";

import { loginreducer } from "./logIn/reducers";
import { todoreducer } from "./todo/reducers";

const rootReducer = combineReducers({
  login: loginreducer,
  todo: todoreducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
