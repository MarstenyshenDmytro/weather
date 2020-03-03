import client from "./client";

const getWeatherAPI = (location, temperature) =>
  client("GET", {
    lat: location.coords.latitude,
    lon: location.coords.longitude,
    format: "json",
    u: temperature
  })
    .get()
    .then(r => r.data);

export { getWeatherAPI };
