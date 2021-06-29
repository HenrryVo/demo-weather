import moment from "moment";

export default class Forecast {
  constructor(data) {
    const listForecast = data?.list
      .map((item) => {
        return {
          day: moment.unix(item?.dt).utc().format("dddd"),
          date: moment.unix(item?.dt).utc().format("L"),
          tempMin: item?.main?.temp_min,
          tempMax: item?.main?.temp_max,
        };
      })
      .reduce((acc, val, i, arr) => {
        const { date, tempMin, tempMax } = val;
        const ind = acc.findIndex((el) => el.date === date);
        if (ind !== -1) {
          acc[ind].tempMin =
            acc[ind].tempMin > tempMin ? tempMin : acc[ind].tempMin;
          acc[ind].tempMax =
            acc[ind].tempMax < tempMax ? tempMax : acc[ind].tempMax;
        } else {
          acc.push({...val});
        }
        return acc;
      }, []);
    return {
      city: data?.city?.name,
      list: listForecast,
    };
  }
}
