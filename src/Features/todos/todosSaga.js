import { call, put } from "redux-saga/effects";
const fetchTodos = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((d) => d);
  // .catch((e) => e);
  return data;
};
function* getTodos() {
  try {
    const todos = yield call(fetchTodos);
    yield put({ type: "TODOS_REQUEST_SUCCESS", todos });
  } catch (error) {
    yield put({ type: "TODOS_REQUEST_FAILURE", error });
  }
}
export default getTodos;
