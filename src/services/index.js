import axios from "axios";
import { apiWeather } from "./api";
import { Forecast } from "models";
import { CITY_DEFAULT } from "constants/index";

export const fetchDataWeather = async (data, callback) => {
  await axios
    .get(apiWeather(data ? data : CITY_DEFAULT))
    .then((response) => {
      if (response.status === 200) {
        const formaData = new Forecast(response.data);
        callback(true, formaData);
      }
    })
    .catch((error) => {
      callback(false,error?.response?.data?.message);
    });
};
