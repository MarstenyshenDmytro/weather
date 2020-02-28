import {
  REQUEST_WEATHER,
  SUCCESS_WEATHER,
  ERROR_WEATHER
} from "../actions/weather";

export const initialState = {
  loading: true,
  error: null,
  data: [],
  position: null
};

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return { ...state, loading: true, position: action.payload };
    case SUCCESS_WEATHER:
      return { ...state, loading: false, data: action.payload };
    case ERROR_WEATHER:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
