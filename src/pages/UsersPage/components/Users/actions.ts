import { createAction } from "redux-actions";

export const getUsersStart = createAction("GET_USERS_START");
export const getUsersSuccess = createAction("GET_USERS_SUCCESS");
export const getUsersError = createAction("GET_USERS_ERROR");
