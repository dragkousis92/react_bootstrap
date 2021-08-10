import actionCreator from 'utilities/action-creator';

const packageCreator = actionCreator('weather');

const loadWeatherData = packageCreator.createEffect('load_weather');

export { loadWeatherData };
