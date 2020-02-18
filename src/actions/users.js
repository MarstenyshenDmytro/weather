export const REQUEST_WEATHER = "REQUEST_WEATHER";
export const SUCCESS_WEATHER = "SUCCESS_WEATHER";
export const ERROR_WEATHER = "ERROR_WEATHER";

export function requestWeather(position) {
  return { type: REQUEST_WEATHER, meta: position };
}

export function successWeather(data) {
  return {
    type: SUCCESS_WEATHER,
    payload: data
  };
}

export function errorWeather() {}
