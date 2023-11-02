import { all, fork } from "redux-saga/effects";
import { getUsersWatcher } from "../pages/UsersPage/components/Users/sagas/getUsersSaga";

export function* rootSagas() {
  yield all([getUsersWatcher].map(fork));
}
