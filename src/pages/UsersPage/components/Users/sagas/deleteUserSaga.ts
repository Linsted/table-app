import { deleteUser } from "@/pages/utils/facades/deleteUser";

import { call, put, takeEvery } from "typed-redux-saga";
import {
  deleteUserStart,
  deleteUserSuccess,
  deleteUserError,
} from "../actions";

export function* deleteUserWatcher() {
  yield takeEvery(deleteUserStart, deleteUserWorker);
}

function* deleteUserWorker({ payload }: { payload: string }) {
  try {
    const response = yield* call(deleteUser, payload);
    console.log(response);
    yield* put(deleteUserSuccess(payload));
  } catch (error) {
    yield* put(deleteUserError(error as Error));
  }
}
