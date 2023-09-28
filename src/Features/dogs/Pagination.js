import React, { memo, useEffect, useState } from "react";
import UserList from "./UserList";

const Pagination = memo(({ items, onClick }) => {
  const [pages, setPages] = useState(0);
  useEffect(() => {
    // setPages(Math.round(items?.length / 3 + 1));
  }, [items]);
  const rows = () => {
    const rs = [];
    for (let i = 1; i <= Math.round(items?.length / 3 + 1); i++) {
      rs.push(
        <button key={i} onClick={onClick} value={i}>
          {i}
        </button>
      );
    }
    return rs;
  };
  return (
    <div>
      Pagination
      <div>{rows()}</div>
    </div>
  );
});

export default Pagination;
