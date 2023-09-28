import React, { useEffect, useMemo, useState } from "react";
import UserList from "./UserList";
import Pagination from "./Pagination";
import AgeComponent from "./AgeComponent";
import InputComponent from "./InputComponent";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((u) => setUsers(u));
  }, []); // initial load/update

  const handlePage = (e) => {
    console.log(e?.target?.value);
    const x = parseInt(e?.target?.value) + 1;
    setFilteredUsers(users.slice(x, x + 3));
  };
  const pageingContent = useMemo(() => {
    return <Pagination items={users} onClick={handlePage} />;
  }, [users]);
  return (
    <>
      <div style={{ border: "1px solid" }}>
        Users
        <p>Total Users: {users?.length}</p>
        {pageingContent}
        <UserList users={filteredUsers} />
      </div>
      <div>
        <InputComponent />
        <AgeComponent />
      </div>
    </>
  );
};

export default Users;
