import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import getExchangeRates from "./ExchangeRatesSaga";
import getMovieList from "../Movies/movieSaga";
import getProducts from "../Features/Shop/shopSaga";
import getTodos from "../Features/todos/todosSaga";
import getUsersDetails from "../Features/users/usersSaga";
import {
  getStartingCounter,
  incrementCounterValue,
  decrementCounterValue,
} from "../Features/counter/counterSaga";

function fetchDog() {
  return axios({
    method: "GET",
    url: "https://dog.ceo/api/breeds/image/random",
  });
}
function* getCounter() {
  const counter = 110;
  yield put({ type: "GET_COUNTER_SUCCESS", counter });
}
function* incrementCounter(payload) {
  const counterValue = payload.counter1 + 10;
  yield put({ type: "INCREMENT_COUNTER_SUCCESS", counter: counterValue });
}
function* decrementCounter(payload) {
  const counterValue = payload.counter1 - 5;

  yield put({ type: "DECREMENT_COUNTER_SUCCESS", counter: counterValue });
}
const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
const getUsers1 = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  return axios({
    method: "GET",
    url: url,
  });
};

const getUsers2 = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((r) => r.json())
    .then((d) => d);
};

function* getSearchItems() {
  const items = yield call(getUsers);
  yield put({ type: "SEARCH_ITEMS_RETRIEVE_SUCCESS", items: items });
  //with axios
  // yield put({ type: 'SEARCH_ITEMS_RETRIEVE_SUCCESS', items: items.data })
}
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", getDog);
  yield takeLatest("GET_COUNTER", getCounter);
  yield takeLatest("INCREMENT_COUNTER_REQUEST", incrementCounter);
  yield takeLatest("DECREMENT_COUNTER_REQUEST", decrementCounter);
  yield takeLatest("SEARCH_ITEMS_RETRIEVE", getSearchItems);
  yield takeLatest("GET_EXCHANGERATES_REQUEST", getExchangeRates);
  yield takeLatest("GET_MOVIE_LIST", getMovieList);
  yield takeLatest("GET_PRODUCTS_LIST", getProducts);
  yield takeLatest("TODOS_REQUEST", getTodos);
  yield takeLatest("USERS_REQUEST", getUsersDetails);
  yield takeLatest("GET_COUNTER_REQUEST", getStartingCounter);
  yield takeLatest("INCREMENT_COUNTER_REQUEST", incrementCounterValue);
  yield takeLatest("DECREMENT_COUNTER_REQUEST", decrementCounterValue);
}
export function* getDog() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;
    yield put({ type: "API_CALL_SUCCESS", dog });
  } catch (error) {
    console.log(error.message);
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
