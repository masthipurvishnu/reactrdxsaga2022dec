import React, { useCallback, useMemo, useState } from "react";
import TodoSection from "./TodoSection";
import { postTodo } from "./utils";
const todos = [
  { id: 0, content: "Learn JS" },
  { id: 1, content: "Learn HTML" },
  { id: 2, content: "Learn CSS" },
  { id: 3, content: "Learn React" },
  { id: 4, content: "Learn Node.js" },
];
const TodoApp2 = () => {
  const [count, setCount] = useState(0);
  const [reverseCount, setReverseCount] = useState(4);
  /* When -1 clicked postTodo does not recalculate/reCalled.
  It will be called only when count is changed.

   */
  // This memorizes the function results value and avoids recalling/recalculating
  // it if dependency does not change.
  const getTodos = useCallback(() => {
    return postTodo(count).then((r) => r);
  }, [count]);
  // here it memorizes the value and does not rerender the component
  // if dependency does not change (ln#37 if uncomment)
  const renderTodo = useMemo(() => {
    return <TodoSection getTodos={getTodos} />;
  }, [count]);
  return (
    <div>
      <button key={1} onClick={() => setReverseCount(reverseCount - 1)}>
        -1
      </button>
      <button key={2} onClick={() => setCount(count + 1)}>
        +1
      </button>
      <p>{`Rerverse count - ${reverseCount}`}</p>
      {/* {renderTodo} */}
      <TodoSection getTodos={getTodos} />
    </div>
  );
};

export default TodoApp2;
