import { createAction } from "redux-actions";

import { USERS_ACTIONS_TYPES } from "./constants";

export const getUsersStart = createAction(USERS_ACTIONS_TYPES.GET_USERS_START);
export const getUsersSuccess = createAction(
  USERS_ACTIONS_TYPES.GET_USERS_SUCCESS
);
export const getUsersError = createAction(USERS_ACTIONS_TYPES.GET_USERS_ERROR);

export const deleteUserStart = createAction(
  USERS_ACTIONS_TYPES.DELETE_USER_START
);

export const deleteUserSuccess = createAction(
  USERS_ACTIONS_TYPES.DELETE_USER_SUCCESS
);

export const deleteUserError = createAction(
  USERS_ACTIONS_TYPES.DELETE_USER_ERROR
);
