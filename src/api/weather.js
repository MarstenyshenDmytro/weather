import client from "./client";

const getWeatherAPI = location => client(location);

export { getWeatherAPI };
