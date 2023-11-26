import { combineReducers } from "redux";
import { USERS_KEY } from "../pages/UsersPage/components/Users/constants";
import { userReducer } from "../pages/UsersPage/components/Users/reducer";

export const rootReducers = combineReducers({ [USERS_KEY]: userReducer });
