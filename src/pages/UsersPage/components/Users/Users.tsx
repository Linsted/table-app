import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { usersSelector } from "./selectors";
import { deleteUserStart } from "./actions";

export default function Users() {
  const dispatch = useDispatch();

  const users = useSelector(usersSelector);
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <div
          style={{
            display: "flex",
            border: "1px solid red",
            gap: "5px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div key={user.id}>{user.name}</div>
            <div>{user.phone}</div>
          </div>
          <button
            onClick={() => dispatch(deleteUserStart(user.id))}
            type="button"
          >
            Delete number
          </button>
        </div>
      ))}
    </div>
  );
}
