import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../index';
import {getWeather} from '../../../api';

jest.mock('../../../api', () => ({
  getWeather: jest.fn().mockImplementation(() =>
    Promise.resolve({
      success: true,
      data: {
        current: {
          feelsLike: 46.72,
          main: 'Cloudy',
          temp: 48.22,
          windDeg: 180,
          windSpeed: 4.21,
        },
        daily: [
          {
            day: 'Thursday',
            time: 'AM',
            main: 'Cloudy',
            temp: 50.12,
          },
          {
            day: 'Thursday',
            time: 'AM',
            main: 'Cloudy',
            temp: 34.65,
          },
          {
            day: 'Friday',
            time: 'AM',
            main: 'Cloudy',
            temp: 50.12,
          },
          {
            day: 'Friday',
            time: 'AM',
            main: 'Cloudy',
            temp: 34.65,
          },
          {
            day: 'Saturday',
            time: 'AM',
            main: 'Cloudy',
            temp: 50.12,
          },
          {
            day: 'Saturday',
            time: 'AM',
            main: 'Cloudy',
            temp: 34.65,
          },
          {
            day: 'Sunday',
            time: 'AM',
            main: 'Cloudy',
            temp: 50.12,
          },
          {
            day: 'Sunday',
            time: 'AM',
            main: 'Cloudy',
            temp: 34.65,
          },
        ],
      },
    }),
  ),
}));

describe('HomeScreen', () => {
  it('should fetch data on initial render', async () => {
    await render(<HomeScreen />);
    expect(getWeather).toHaveBeenCalled();
  });
  it('should render main data components correctly', async () => {
    const {getByTestId, getByText} = await render(<HomeScreen />);
    expect(getByTestId('main-condition').children[0]).toEqual('Cloudy');
    expect(getByTestId('main-temp').children[0]).toEqual('48°');
    expect(getByText('47°')).toBeDefined();
    expect(getByText('180° / 4mph')).toBeDefined();
  });
  it('should render forecast data components correctly', async () => {
    const {getAllByTestId} = await render(<HomeScreen />);
    expect(getAllByTestId('forecast-day')[0].children[0]).toEqual('Thursday');
    expect(getAllByTestId('forecast-time')[0].children[0]).toEqual('AM');
    expect(getAllByTestId('forecast-main-condition')[0].children[0]).toEqual(
      'Cloudy',
    );
    expect(getAllByTestId('forecast-temp')[0].children[0]).toEqual('50°');
    expect(getAllByTestId('forecast-day').length).toEqual(8);
  });
});
