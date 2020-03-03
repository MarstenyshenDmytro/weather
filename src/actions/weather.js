export const REQUEST_WEATHER = "REQUEST_WEATHER";
export const SUCCESS_WEATHER = "SUCCESS_WEATHER";
export const ERROR_WEATHER = "ERROR_WEATHER";
export const CHANGE_TEMPERATURE = "CHANGE_TEMPERATURE";

export function requestWeather(position) {
  return { type: REQUEST_WEATHER, payload: position };
}

export function successWeather(data) {
  return {
    type: SUCCESS_WEATHER,
    payload: data
  };
}

export function errorWeather(error) {
  return {
    type: ERROR_WEATHER,
    payload: error
  };
}

export function changeTemperature(type) {
  return {
    type: CHANGE_TEMPERATURE,
    payload: type
  };
}
