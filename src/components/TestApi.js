import React, { useState, useEffect } from "react";
import { getWeatherAPI } from "../api/weather";

function Weather(props) {
  const [data, setData] = useState({ value: null });

  // useEffect(() => {
  //   console.log(getWeatherAPI());
  // });
  console.log(props);
  return <div>{data && <span></span>}</div>;
}

export default Weather;
