import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UsersList = () => {
  const [users, setUsers] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.usersReducer.users);
  useEffect(() => {
    dispatch({ type: "USERS_REQUEST" });
  }, []);
  useEffect(() => {
    setUsers(data);
  }, [data]);
  return (
    <>
      <p>{"Users Details"}</p>
      <ul>
        {users &&
          users.map((item, i) => {
            return <li key={i}>{item.name}</li>;
          })}
      </ul>
    </>
  );
};
export default UsersList;
