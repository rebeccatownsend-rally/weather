import {formatTemperature, formatWind} from '../index';

describe('formatTemperature', () => {
  it('correctly formats temperature data', () => {
    expect(formatTemperature(23.45)).toEqual('23°');
    expect(formatTemperature(23.7)).toEqual('24°');
  });
});

describe('formatWind', () => {
  it('correctly formats wind data', () => {
    expect(formatWind(34.56, 180.92)).toEqual('35° / 181mph');
    expect(formatWind(34.4, 180.12)).toEqual('34° / 180mph');
  });
});
