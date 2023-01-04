import { takeLatest, call, put } from 'redux-saga/effects'
import axios from "axios";

function fetchDog() {
    return axios({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/image/random'
    })
}
function* getCounter() {
    const counter = 0
    put({ type: 'GET_COUNTER_SUCCESS', counter })
}
export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
    yield takeLatest('GET_COUNTER', getCounter)
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