import { loadWeatherData } from './actions';

const initialState = {
  city: '',
  weatherLoadedData: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case loadWeatherData.type:
      return {
        ...state,
        city: action.payload,
      };
    case loadWeatherData.succeeded.type:
      return {
        ...state,
        weatherLoadedData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
