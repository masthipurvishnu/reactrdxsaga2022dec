import { func } from "prop-types";
import { call, put } from "redux-saga/effects";

async function fetchUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((r) => r.json())
    .then((d) => d);
  return users;
}

function* getUsersDetails() {
  try {
    const users = yield call(fetchUsers);
    yield put({ type: "USERS_REQUEST_SUCCESS", users });
  } catch (error) {
    yield put({ type: "USERS_REQUEST_FAILURE", error });
  }
}
export default getUsersDetails;
