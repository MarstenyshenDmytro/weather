import React, { useContext } from "react";
import { convertDate, getCurrentDate } from "../../utils/convertDate";
import { ContextApp } from "../../store/context";
import "./weatherInfo.scss";

const WeatherInfo = props => {
  const { state } = useContext(ContextApp);
  const currentDate = getCurrentDate();
  const { click, id } = props;
  const { day, date, low, high } = state.data.forecasts[id];

  return (
    <div className="weather-card" onClick={click} data-id={id}>
      <p className="day-name">
        {convertDate(date) === currentDate ? "Today" : day}
      </p>
      <p className="temperature">{`${high}°  ${low}°`}</p>
    </div>
  );
};

export default WeatherInfo;
