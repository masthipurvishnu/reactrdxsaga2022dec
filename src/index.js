import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react-redux';

import dogsReducer from './reducers/dogsReducer'
import { watcherSaga } from './saga/saga';

const sagaMiddleware = createSagaMiddleware();
// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
  dogsReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watcherSaga);
// const root = ReactDOM.createRoot(document.getElementById('root'));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
