import React, { useEffect, useState } from "react";

const UserList = ({ users }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(users);
  }, [users]);
  return (
    <>
      UserList
      <>
        {items?.map((item, i) => {
          return <p key={i}>{item?.name}</p>;
        })}
      </>
    </>
  );
};

export default UserList;
