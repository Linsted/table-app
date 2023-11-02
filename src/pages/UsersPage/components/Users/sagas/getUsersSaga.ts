import { call, put, takeEvery } from "redux-saga/effects";

import { getUsersError, getUsersStart, getUsersSuccess } from "../actions";
import { IUser } from "../../../../../types";
import { fetchUsers } from "../../../../utils/facades/fetchUsers";

export function* getUsersWatcher() {
  yield takeEvery(getUsersStart, getUsersWorker);
}

function* getUsersWorker() {
  try {
    const data: IUser[] = yield call(fetchUsers);
    console.log(data);
    yield put(getUsersSuccess(data));
  } catch (error) {
    yield put(getUsersError());
  }
}
