import React from "react";
import ReactDOM from "react-dom/client";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { Provider } from "react-redux";

import dogsReducer from "./Features/dogs/dogsReducer";
import counterReducer from "./reducers/counterReducer";
import searchReducer from "./reducers/searchReducer";
import exchangeRatesRecuder from "./ExchangeRates/exchangeRatesReducer";
import movieReducer from "./Movies/movieReducer";
import shopReducer from "./Features/Shop/shopReducer";
import todosReducer from "./Features/todos/todosReducer";
import usersReducer from "./Features/users/usersReducer";
import { watcherSaga } from "./saga/saga";
import counterValueReducer from "./Features/counter/counterReducer";
const sagaMiddleware = createSagaMiddleware();
// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const rootReducer = combineReducers({
  dogsReducer,
  counterReducer,
  searchReducer,
  exchangeRatesRecuder,
  movieReducer,
  shopReducer,
  todosReducer,
  usersReducer,
  counterValueReducer,
});
let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherSaga);
const root = ReactDOM.createRoot(document.getElementById("root"));

// render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
