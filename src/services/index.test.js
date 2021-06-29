import mockAxios from "axios";
import { fetchDataWeather } from "./index";

jest.mock("axios");

describe("fetchDataWeather", () => {
  it("fetches successfully data from an API", async () => {
    const data = {
      data: {
        city: "hanoi",
        list: [
          {
            date: "06/29/2021",
            day: "Tuesday",
            tempMin: "26",
            tempMax: "30",
          },
        ],
      },
    };
    const callback = jest.fn();
    // setup
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        data,
      })
    );
    await fetchDataWeather("Ho Chi Minh", callback);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://api.openweathermap.org/data/2.5/forecast?q=Ho Chi Minh&mode=json&cnt=32&units=metric&appid=f53efe2bc35c297b4b6d8441f00410e9"
    );
  });
});