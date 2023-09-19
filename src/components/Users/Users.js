import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const Users = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    // console.log(users);
  }, [users]);
  const getUsersList = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  return (
    <>
      {"Users list"}
      <button onClick={getUsersList}>{"Get Users"}</button>
      <ul>
        {users &&
          users?.map((user, i) => {
            return <li key={i}>{user.name}</li>;
          })}
      </ul>
      <Counter />
    </>
  );
};
export default Users;
