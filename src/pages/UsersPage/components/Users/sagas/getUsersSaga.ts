import { call, put, takeEvery } from "redux-saga/effects";

import { IUser } from "@/types";
import { fetchUsers } from "@/pages/utils/facades/fetchUsers";

import { getUsersError, getUsersStart, getUsersSuccess } from "../actions";

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
