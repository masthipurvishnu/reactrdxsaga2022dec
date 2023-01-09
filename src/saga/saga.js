import { takeLatest, call, put } from 'redux-saga/effects'
import axios from "axios";

function fetchDog() {
    return axios({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/image/random'
    })
}
function* getCounter() {
    const counter = 110
    console.log(counter);
    yield put({ type: 'GET_COUNTER_SUCCESS', counter })
}
function* incrementCounter(payload) {
    const counterValue = payload.counter1 + 10
    yield put({ type: 'INCREMENT_COUNTER_SUCCESS', counter: counterValue })
}
function* decrementCounter(payload) {
    const counterValue = payload.counter1 - 5

    yield put({ type: 'DECREMENT_COUNTER_SUCCESS', counter: counterValue })
}
const getUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const res = await fetch(url)
    const data = await res.json()
    return data
}
const getUsers1 = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    return axios({
        method: 'GET',
        url: url
    })
}
function* getSearchItems() {
    const items = yield call(getUsers)
    yield put({ type: 'SEARCH_ITEMS_RETRIEVE_SUCCESS', items: items })
    //with axios
    // yield put({ type: 'SEARCH_ITEMS_RETRIEVE_SUCCESS', items: items.data })
}
export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
    yield takeLatest('GET_COUNTER', getCounter)
    yield takeLatest('INCREMENT_COUNTER_REQUEST', incrementCounter)
    yield takeLatest('DECREMENT_COUNTER_REQUEST', decrementCounter)
    yield takeLatest('SEARCH_ITEMS_RETRIEVE', getSearchItems)
}
export function* workerSaga() {
    try {
        const response = yield call(fetchDog)
        const dog = response.data.message;
        yield put({ type: 'API_CALL_SUCCESS', dog })
    } catch (error) {
        console.log(error.message);
        yield put({ type: "API_CALL_FAILURE", error })
    }
}