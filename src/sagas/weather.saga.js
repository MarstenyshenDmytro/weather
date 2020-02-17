import { getWeatherAPI } from "../api/weather";
import {
  successWeather,
  errorWeather,
  REQUEST_WEATHER
} from "../actions/users";
import { call, put, takeLatest } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeLatest(REQUEST_WEATHER, workerSaga);
}

export function* workerSaga() {
  try {
    const weatherData = yield call(getWeatherAPI);
    yield put(successWeather(weatherData));
  } catch (error) {
    yield put(errorWeather(error));
  }
}
