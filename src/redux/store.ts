import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { getReducers } from "./reducers";
import { rootSagas } from "./rootSaga";

const initialState = {};

export const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    combineReducers(getReducers()),
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSagas);

  return store;
};
