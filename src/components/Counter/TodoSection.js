import React, { useEffect, useState } from "react";

const TodoSection = ({ getTodos }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos()
      .then((result) => {
        setTodos([...todos, result]);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("getTodos function called");
  }, [getTodos]);
  console.log(1);
  return (
    <div>
      {"TodoSection"}
      {todos.map((todo, i) => (
        <p key={i}>{todo?.content}</p>
      ))}
    </div>
  );
};

export default TodoSection;
