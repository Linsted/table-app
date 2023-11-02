import { USERS_KEY } from "../pages/UsersPage/components/Users/constants";
import { userReducer } from "../pages/UsersPage/components/Users/reducer";

const reducers = { [USERS_KEY]: userReducer };

export const getReducers = () => ({ ...reducers });
