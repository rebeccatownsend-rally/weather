import {getDayOfWeek, formatWeatherResponse} from '../utils';
import weatherData from '../../__fixtures__/weather';
import rawWeatherData from '../../__fixtures__/weather_response';

describe('getDayOfWeek', () => {
  it('should return the correct weekday for a given unix date', () => {
    expect(getDayOfWeek(1604937600)).toEqual('Monday');
    expect(getDayOfWeek(1605024000)).toEqual('Tuesday');
    expect(getDayOfWeek(1604503766)).toEqual('Wednesday');
    expect(getDayOfWeek(1604592000)).toEqual('Thursday');
    expect(getDayOfWeek(1604678400)).toEqual('Friday');
    expect(getDayOfWeek(1604764800)).toEqual('Saturday');
    expect(getDayOfWeek(1604851200)).toEqual('Sunday');
  });
});

describe('formatWeatherResponse', () => {
  it('should convert the raw weather response to data the component can digest', () => {
    expect(formatWeatherResponse(rawWeatherData)).toEqual(weatherData);
  });
});
