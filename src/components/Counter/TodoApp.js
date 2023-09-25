import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { createTodos, getTodos } from "./utils";
const todos = createTodos();
const TodoApp = () => {
  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      {"TodoApp"}
      <p>
        <button onClick={() => setTab("all")}>{"All"}</button>
        <button onClick={() => setTab("active")}>{"Active"}</button>
        <button onClick={() => setTab("completed")}>{"Completed"}</button>
      </p>
      <p>
        Dark mode :{" "}
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
      </p>
      <TodoList todos={todos} theme={isDark ? "dark" : "light"} tab={tab} />
    </div>
  );
};

export default TodoApp;
