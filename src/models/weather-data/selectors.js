/*
 * State selectors
 */

const loadedWeatherData = ({ weatherDataReducer }) => {
  return weatherDataReducer.weatherLoadedData;
};

export { loadedWeatherData };
