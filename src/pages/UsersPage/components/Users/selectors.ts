import { createSelector } from "reselect";

import { USERS_KEY } from "./constants";
import { IState } from "./reducer";

interface IUserState {
  users: IState;
}

const getUsers = (state: IUserState) => state[USERS_KEY];

export const usersSelector = createSelector(getUsers, (users) => users.users);
