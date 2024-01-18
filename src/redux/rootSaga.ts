import { all, fork } from "redux-saga/effects";
import { getUsersWatcher } from "../pages/UsersPage/components/Users/sagas/getUsersSaga";
import { deleteUserWatcher } from "@/pages/UsersPage/components/Users/sagas/deleteUserSaga";

export function* rootSagas() {
  yield all([getUsersWatcher, deleteUserWatcher].map(fork));
}
