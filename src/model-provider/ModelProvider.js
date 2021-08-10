import React from 'react';

import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { createEpicMiddleware, combineEpics } from 'redux-observable';
import {
  reducer as weatherDataReducer,
  epics as weatherEpics,
} from 'models/weather-data/';

type Props = {
  options: Object,
  children: React.Node,
};

const ModelProvider = ({ options, children }: Props) => {
  const rootReducer = combineReducers({
    weatherDataReducer,
  });

  const rootEpic = combineEpics(weatherEpics);

  const initialState = {};

  const epicMiddleware = createEpicMiddleware({
    dependencies: { options },
  });

  const middlewares = [epicMiddleware];

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, initialState, enhancer);

  epicMiddleware.run(rootEpic);

  return <Provider store={store}>{children}</Provider>;
};

export default ModelProvider;
