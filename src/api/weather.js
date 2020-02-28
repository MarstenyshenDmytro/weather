import client from "./client";
import { getCookie } from "./cookie";

const getWeatherAPI = location =>
  client("GET", {
    lat: location.coords.latitude,
    lon: location.coords.longitude,
    format: "json",
    u: getCookie("t") || "c"
  })
    .get()
    .then(r => r.data);

export { getWeatherAPI };
