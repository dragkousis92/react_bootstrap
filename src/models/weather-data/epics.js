import { ofType, combineEpics } from 'redux-observable';
import { map, withLatestFrom, switchMap, tap } from 'rxjs/operators';
import axios from 'axios';
import { from } from 'rxjs';

import { loadWeatherData } from './actions';

const loadCityWeatherEpic = (action$, state$) =>
  action$.pipe(
    ofType(loadWeatherData.type),
    withLatestFrom(state$),
    switchMap(([{ payload }]) =>
      from(
        axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=435fa4c4dd289bf75643f8fc8e273d6e&lang=el&units=metric`,
        ),
      ).pipe(
        tap(response => response),
        map(response => loadWeatherData.succeeded(response.data)),
      ),
    ),
  );

const epics = combineEpics(loadCityWeatherEpic);

export default epics;
