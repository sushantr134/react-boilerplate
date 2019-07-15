import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import helloReducer from "./reducers/helloReducer";

const Store = (initialState: any) =>
  createStore(
    combineReducers({ helloStore: helloReducer }),
    initialState,
    compose(applyMiddleware(thunk, logger))
  );

export default Store;
