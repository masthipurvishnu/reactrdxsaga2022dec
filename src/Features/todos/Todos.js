import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducer.todos);
  const error = useSelector((state) => state.todosReducer.error);
  useEffect(() => {
    dispatch({ type: "TODOS_REQUEST" });
  }, []); // componentDidMount and componentDidUpdate (two times)
  useEffect(() => {
    setData(todos);
  }, [todos]); // getDerivedStateFromProps, initial load and only when the dep value change.
  const onChange = (e) => {
    console.log("onchange", e.target.value);
    setData((d) => d.filter((el) => el.title.includes(e.target.value)));
  };
  return (
    <>
      <p>{"Top 5 Todos"}</p>
      <p style={{ color: "red" }}>{error && `Error: ${error?.message}`}</p>
      <label>{"Filter "}</label>
      <input onChange={onChange} />
      <ol>
        {data &&
          data?.map(
            (item, i) =>
              i < 5 && (
                <li key={i}>
                  {item.id} - {item?.title}
                </li>
              )
          )}
      </ol>
    </>
  );
};

export default Todos;
