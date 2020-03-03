import React, { useContext } from "react";

import { convertDate, getCurrentDate } from "../../utils/convertDate";
import { ContextApp } from "../../store/context";

import "./weatherInfo.scss";

const getForecastsById = (state, id) => {
  return state.data.forecasts[id];
};

const WeatherInfo = props => {
  const { state } = useContext(ContextApp);
  const currentDate = getCurrentDate();
  const { click, id } = props;
  const { day, date, low, high } = getForecastsById(state, id);
  const { temperature } = state;

  const handleClick = () => {
    click(id);
  };

  return (
    <div className="weather-card" onClick={handleClick}>
      <p className="day-name">
        {convertDate(date) === currentDate ? "Today" : day}
      </p>
      <p className="temperature">{`${high}°${temperature.toUpperCase()}/${low}°${temperature.toUpperCase()}`}</p>
    </div>
  );
};

export default WeatherInfo;
