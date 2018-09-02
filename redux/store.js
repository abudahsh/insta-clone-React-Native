import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import thunk from "redux-thunk";
import AppReducer from "./reducer";

const store = createStore(
  AppReducer,
  /* preloadedState, */ composeWithDevTools(applyMiddleware(thunk))
);
export default store;
