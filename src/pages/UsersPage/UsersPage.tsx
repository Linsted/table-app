import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { usersSelector } from "./components/Users/selectors";
import { getUsersStart } from "./components/Users/actions";

export default function UsersPage() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);

  useEffect(() => {
    dispatch(getUsersStart());
  }, [dispatch]);

  console.log(users);

  return <div></div>;
}
