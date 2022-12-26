import { takeLatest, call, put } from 'redux-saga/effects'
import axios from "axios";

function fetchDog() {
    return axios({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/image/random'
    })
}

export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
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