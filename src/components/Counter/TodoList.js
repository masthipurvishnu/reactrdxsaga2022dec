import React, { useMemo } from "react";
import { filterTodos } from "./utils";

const TodoList = ({ todos, theme, tab }) => {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  //   console.log(visibleTodos);
  return (
    <div>
      {"TodoList theme "} {theme}
      <p>
        {"visibleCount "} {visibleTodos?.length}
      </p>
      <ul>
        {visibleTodos.map((todo) => {
          return (
            <li key={todo.id}>
              {!todo.completed ? (
                <s>{`${todo.id} - ${todo.title} - ${todo.completed}`}</s>
              ) : (
                `${todo.id} - ${todo.title} - ${todo.completed}`
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
