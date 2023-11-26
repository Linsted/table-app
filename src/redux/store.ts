import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducers } from "./reducers";
import { rootSagas } from "./rootSaga";

const initialState = {};

export const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    rootReducers,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSagas);

  return store;
};
