/************* INTERFAcES *************/

export type IDailyForecast = {
  day: DayOfWeek;
  time: TimeAbbr;
  main: string;
  temp: number;
};

export type INetworkResponse<T> = {
  data: T;
  success: boolean;
};

type IRawDailyResponseItem = {
  dt: number;
  temp: {
    day: number;
    night: number;
  };
  weather: Array<{main: string}>;
};

export type IRawWeatherResponse = {
  current: {
    dt: number;
    feels_like: number;
    temp: number;
    weather: Array<{main: string}>;
    wind_deg: number;
    wind_speed: number;
  };
  daily: Array<IRawDailyResponseItem>;
};

export type IWeather = {
  current: {
    feelsLike: number;
    main: string;
    temp: number;
    windDeg: number;
    windSpeed: number;
  };
  daily: Array<IDailyForecast>;
};

/**************** ENUMS ****************/

export enum DayOfWeek {
  SUNDAY = 'Sunday',
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
}

export enum TimeAbbr {
  AM = 'AM',
  PM = 'PM',
}
