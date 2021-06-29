const API_ENDPOINT = process.env.REACT_APP_API_SERVICE;
const APP_KEY = process.env.REACT_APP_SERVICE_KEY;

export const apiWeather = (location) =>
  `${API_ENDPOINT}?q=${location}&mode=json&cnt=32&units=metric&appid=${APP_KEY}`;
