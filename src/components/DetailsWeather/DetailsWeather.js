import React, { useContext } from "react";
import { convertDate, changeDateView } from "../../utils/convertDate";
import conditionCode from "../../utils/conditionCodes";
import { ContextApp } from "../../store/context";
import "./detailsWeather.scss";

const DetailsWeather = props => {
  const { id } = props;
  const { state } = useContext(ContextApp);
  const { day, date, low, high, text, code } = state.data.forecasts[id];

  return (
    <div className="weather-details">
      <p>{day}</p>
      <p>{`Date: ${changeDateView(convertDate(date))}`}</p>
      <p>{`Min: ${low}°`}</p>
      <p>{`Max: ${high}°`}</p>
      <p>{`${text}`}</p>
      <p>{`Details: ${conditionCode(code)}`}</p>
    </div>
  );
};

export default DetailsWeather;
