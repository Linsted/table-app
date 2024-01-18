import { UsersState, UsersAction } from "@/types";

import { USERS_ACTIONS_TYPES } from "./constants";

const initialState: UsersState = {
  users: [],
  error: null,
};

export const userReducer = (
  state = initialState,
  action = {} as UsersAction
) => {
  switch (action.type) {
    case USERS_ACTIONS_TYPES.GET_USERS_SUCCESS:
      return {
        ...state,
        users: [...action.payload],
      };
    case USERS_ACTIONS_TYPES.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
