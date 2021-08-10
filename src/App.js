import React from 'react';
import ModelProvider from './model-provider';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import WeatherInfo from 'components/weather-info';

const App = options => {
  return (
    <Router>
      <ModelProvider options={options}>
        <div className='mainContainer'>
          <Switch>
            <Route exact path='/'>
              <WeatherInfo />
            </Route>
          </Switch>
        </div>
      </ModelProvider>
    </Router>
  );
};

export default App;

// export default App;
