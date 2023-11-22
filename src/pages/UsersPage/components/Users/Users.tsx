import { useSelector } from "react-redux";
import { usersSelector } from "./selectors";

export default function Users() {
  const users = useSelector(usersSelector);
  console.log(users);
  return <div>USERS</div>;
}
