import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getUsersStart } from "./components/Users/actions";
import Users from "./components/Users/Users";

export default function UsersPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersStart());
  }, [dispatch]);

  return (
    <div>
      <Users />
    </div>
  );
}
