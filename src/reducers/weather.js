import {
  REQUEST_WEATHER,
  SUCCESS_WEATHER,
  ERROR_WEATHER
} from "../actions/weather";

const initialState = {
  loading: true,
  error: null,
  data: [],
  position: null
};

function getWeather(state = initialState, action) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        loading: true,
        position: action.meta
      });
    case SUCCESS_WEATHER:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload
      });
    case ERROR_WEATHER:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload
      });
    default:
      return state;
  }
}

export default getWeather;
