import React, { useState, useEffect } from "react";
import { getWeatherAPI } from "../api/weather";

function Weather() {
  const [data, setData] = useState({ value: null });

  useEffect(() => {
    console.log(getWeatherAPI());
  });

  return <div>{data && <span></span>}</div>;
}

export default Weather;
