import { func } from "prop-types";

function createTodos() {
  const todos = [];
  for (let i = 0; i <= 25; i++) {
    todos.push({
      id: i,
      title: "Todo " + (i + 1),
      completed: Math.random() > 0.3,
    });
  }
  return todos;
}
async function getTodos() {
  const r = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((r) => r.json())
    .then((d) => d);
  return r;
}
function filterTodos(todos, tab) {
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    //do nothing for 500 sec
  }
  return todos?.filter((todo) => {
    if (tab === "all") {
      return true;
    } else if (tab === "active") {
      return !todo.completed;
    } else if (tab === "completed") {
      return todo.completed;
    }
  });
}
function postTodo(count) {
  console.log("postTodo called");
  const todos = [
    { id: 0, content: "Learn JS" },
    { id: 1, content: "Learn HTML" },
    { id: 2, content: "Learn CSS" },
    { id: 3, content: "Learn React" },
    { id: 4, content: "Learn Node.js" },
  ];
  return new Promise((resolve, reject) => {
    resolve(todos[count]);
  });
}

export { createTodos, filterTodos, getTodos, postTodo };
