import { useDispatch } from 'react-redux';
import { loadWeatherData } from './actions';

const useWeatherData = () => {
  const dispatch = useDispatch();

  const searchForWeather = city => {
    dispatch(loadWeatherData(city));
  };

  return {
    searchForWeather,
  };
};

export default useWeatherData;
