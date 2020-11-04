import {formatWeatherResponse} from './utils';
import {INetworkResponse, IWeather} from '../interfaces';

export const getWeather = async (): Promise<INetworkResponse<IWeather>> => {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=40.263680&lon=-76.890739&units=imperial&exclude=minutely,hourly,alerts&appid=c5900390c56b55a778d99de6da1755bc',
    );
    const json = await response.json();
    console.log('json', json);
    return {success: true, data: formatWeatherResponse(json)};
  } catch (error) {
    return {success: false, data: error};
  }
};
