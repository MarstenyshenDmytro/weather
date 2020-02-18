import React from "react";
import { DateTime } from "luxon";
import conditionCode from "../../api/conditionCodes";
import "./weatherInfo.scss";

function getDate(date) {
  //console.log(new Date().setTime(date));
  return DateTime.fromSeconds(date).toFormat("yyyy LLL dd");
}

const WeatherInfo = props => {
  //console.log(props);
  const currentDate = DateTime.local().toFormat("yyyy LLL dd");
  const { day, date, low, high, text, code } = props.info;
  return (
    <div className="weather-card">
      <p>{getDate(date) === currentDate ? "Today" : day}</p>
      <p>{`Date: ${getDate(date)}`}</p>
      <p>{`Min temperature: ${low}`}</p>
      <p>{`Max temperature: ${high}`}</p>
      <p>{`Weather: ${text}, datails: ${conditionCode(code)}`}</p>
    </div>
  );
};

export default WeatherInfo;
