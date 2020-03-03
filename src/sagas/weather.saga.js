import { getWeatherAPI } from "../api/weather";
import {
  successWeather,
  errorWeather,
  REQUEST_WEATHER
} from "../actions/weather";
import { call, put, takeLatest } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeLatest(REQUEST_WEATHER, workerSaga);
}

function* workerSaga(position) {
  try {
    const { meta } = position;
    const weatherData = yield call(getWeatherAPI, meta);
    yield put(successWeather(weatherData));
  } catch (error) {
    yield put(errorWeather(error));
  }
}
