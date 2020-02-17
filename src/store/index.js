import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleWare from "redux-saga";
import weather from "../reducers/weather";
import apiSaga from "../sagas/weather.saga";

const saga = createSagaMiddleWare();

let store = createStore(
  combineReducers({
    weather
  }),
  applyMiddleware(saga)
);

saga.run(apiSaga);

export default store;
