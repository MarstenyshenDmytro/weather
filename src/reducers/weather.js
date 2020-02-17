import {
  REQUEST_WEATHER,
  SUCCESS_WEATHER,
  ERROR_WEATHER
} from "../actions/users";

const initialState = {
  loading: false,
  error: null,
  data: []
};

function getWeather(state = initialState, action) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        loading: true
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
