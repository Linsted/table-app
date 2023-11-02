import { handleActions } from "redux-actions";

import { IUser } from "../../../../types";

import { getUsersSuccess } from "./actions";

export interface IState {
  users: IUser[];
  error: boolean;
}

const initialState: IState = {
  users: [],
  error: false,
};

const reducerMap = {
  [String(getUsersSuccess)]: (
    state: IState,
    { payload }: { payload: IUser[] }
  ) => {
    return {
      ...state,
      users: [...payload],
    };
  },
};

export const userReducer = handleActions(reducerMap, initialState);
