import { call, put, takeEvery } from "typed-redux-saga";

import { User } from "@/types";
import { fetchUsers } from "@/pages/utils/facades/fetchUsers";

import { getUsersError, getUsersStart, getUsersSuccess } from "../actions";

export function* getUsersWatcher() {
  yield takeEvery(getUsersStart, getUsersWorker);
}

function* getUsersWorker() {
  try {
    const data: User[] = yield* call(fetchUsers);
    console.log(data);
    yield* put(getUsersSuccess(data));
  } catch (error) {
    yield* put(getUsersError(error as Error));
  }
}
