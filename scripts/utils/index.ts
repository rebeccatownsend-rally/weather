export const formatTemperature = (temp: number): string =>
  `${Math.round(temp).toString()}°`;

export const formatWind = (temp: number, speed: number): string =>
  `${Math.round(temp).toString()}° / ${Math.round(speed).toString()}mph`;

export const wait = (timeout: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
