import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk'

import reducers from './reducers'

const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const middlewares = [routeMiddleware, thunk];

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(
    applyMiddleware(...middlewares),
  ),
);


export { store, history };
