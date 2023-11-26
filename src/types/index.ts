import { USERS_ACTIONS_TYPES } from "@/pages/UsersPage/components/Users/constants";

export type User = {
  createdAt: string;
  name: string;
  phone: string;
  city: string;
  id: string;
};

type Action<T> = {
  type: T;
};

type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

type GetUsersStart = Action<USERS_ACTIONS_TYPES.GET_USERS_START>;
type GetUsersSuccess = ActionWithPayload<
  USERS_ACTIONS_TYPES.GET_USERS_SUCCESS,
  User[]
>;
type GetUsersError = ActionWithPayload<
  USERS_ACTIONS_TYPES.GET_USERS_ERROR,
  boolean
>;

export type UsersState = {
  readonly users: User[];
  readonly error: boolean;
};

export type UsersAction = GetUsersStart | GetUsersSuccess | GetUsersError;
