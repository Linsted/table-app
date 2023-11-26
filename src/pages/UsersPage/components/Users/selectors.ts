import { UsersState } from "@/types";

type UserState = {
  users: UsersState;
};

export const usersSelector = (state: UserState) => state.users.users;
