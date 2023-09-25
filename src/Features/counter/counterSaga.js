// 2:35
import { put } from "redux-saga/effects";

export function* getStartingCounter() {
  yield put({ type: "GET_COUNTER_SUCCESS", counter: 10 });
}
export function* incrementCounterValue(a) {
  yield put({ type: "INCREMENT_COUNTER_SUCCESS", counter: a.counter + 1 });
}
export function* decrementCounterValue(a) {
  yield put({ type: "DECREMENT_COUNTER_SUCCESS", counter: a.counter - 1 });
}

// export { getStartingCounter, incrementCounter, decrementCounter };
