import { createAction } from "redux-actions";

import { USERS_ACTIONS_TYPES } from "./constants";

export const getUsersStart = createAction(USERS_ACTIONS_TYPES.GET_USERS_START);
export const getUsersSuccess = createAction(
  USERS_ACTIONS_TYPES.GET_USERS_SUCCESS
);
export const getUsersError = createAction(USERS_ACTIONS_TYPES.GET_USERS_ERROR);
