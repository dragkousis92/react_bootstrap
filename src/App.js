import React from 'react';
import ModelProvider from './model-provider';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import WeatherInfo from 'components/weather-info';
import UISetup from './ui-setup';

const App = options => {
  return (
    <UISetup>
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
    </UISetup>
  );
};

export default App;

// export default App;
