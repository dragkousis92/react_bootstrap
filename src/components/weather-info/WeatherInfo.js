import React, { useState } from 'react';
import withModelProps from 'utilities/withModelProps';
import { useWeatherData, loadedWeatherData } from 'models/weather-data';

import './weatherInfo.css';

const initialInputState = { weather: '' };

type Props = {
  loadedWeatherData: ?Object,
};
const WeatherInfo = ({ loadedWeatherData }: Props) => {
  const [inputs, setInputs] = useState(initialInputState);
  //   const weatherData = useSelector(loadedWeatherDataSelector);
  const { searchForWeather } = useWeatherData();

  const handleChange = e => {
    e.persist();

    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchForWeather(inputs.weather);
    setInputs({ weather: '' });
  };

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='weather'
            className=''
            value={inputs.weather}
            onChange={handleChange}
          />
          <input type='submit' className='' value='Search' />
        </form>
      </section>
      {!Object.keys(loadedWeatherData).length ? (
        <div>type something</div>
      ) : (
        <section>
          <div className='title'>{loadedWeatherData?.weather[0].main}</div>
          <div className='title'>{loadedWeatherData?.name}</div>
          <table>
            <tbody>
              <tr>
                <td>feels_like</td>
                <td>{loadedWeatherData?.main.feels_like}</td>
              </tr>
              <tr>
                <td>temp</td>
                <td>{loadedWeatherData?.main.temp}</td>
              </tr>
              <tr>
                <td>temp_max</td>
                <td>{loadedWeatherData?.main.temp_max}</td>
              </tr>
              <tr>
                <td>temp_min</td>
                <td>{loadedWeatherData?.main.temp_min}</td>
              </tr>
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

WeatherInfo.defaultProps = {
  weatherLoadedData: {},
};
export default withModelProps({ loadedWeatherData })(WeatherInfo);
