import axios from "axios";

const baseURL = `https://api.openweathermap.org/data/2.5`;
const API_KEY = "386681d7ffb02fa4a92fb25c969b28bb";

export const getWeatherData = async (city) => {
  return await axios.get(
    `${baseURL}/weather?q=${city}&limit=5&appid=${API_KEY}&units=metric`
  );
};

export const getForecastData = async (city) => {
  return await axios.get(
    `${baseURL}/forecast/daily?q=${city}&cnt=7&appid=d94bcd435b62a031771c35633f9f310a&units=metric`
  );
};
