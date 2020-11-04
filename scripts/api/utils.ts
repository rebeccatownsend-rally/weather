import {
  DayOfWeek,
  IRawWeatherResponse,
  IWeather,
  TimeAbbr,
} from '../interfaces';

export const getDayOfWeek = (unixDate: number): DayOfWeek | '' => {
  const dayIndex = new Date(unixDate * 1000).getDay();
  return Object.values(DayOfWeek)[dayIndex];
};

export const formatWeatherResponse = (
  rawWeather: IRawWeatherResponse,
): IWeather => {
  const {
    current: {feels_like, temp, weather, wind_deg, wind_speed},
  } = rawWeather;
  const daily = rawWeather.daily
    .map((d) => [
      {
        day: getDayOfWeek(d.dt),
        time: TimeAbbr.AM,
        temp: d.temp.day,
        main: d.weather[0].main,
      },
      {
        day: getDayOfWeek(d.dt),
        time: TimeAbbr.PM,
        temp: d.temp.night,
        main: d.weather[0].main,
      },
    ])
    .flat()
    .slice(2, 10);
  return {
    current: {
      temp,
      feelsLike: feels_like,
      main: weather[0].main,
      windDeg: wind_deg,
      windSpeed: wind_speed,
    },
    daily,
  };
};
