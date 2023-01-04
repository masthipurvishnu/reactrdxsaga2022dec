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
    yield put({ type: 'GET_COUNTER_SUCCESS', counter })
}
function* incrementCounter(payload) {
    const counterValue = payload.counter1 + 1

    yield put({ type: 'INCREMENT_COUNTER_SUCCESS', counter: counterValue })
}
export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
    yield takeLatest('GET_COUNTER', getCounter)
    yield takeLatest('INCREMENT_COUNTER_REQUEST', incrementCounter)
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