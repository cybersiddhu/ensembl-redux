import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { devTools } from 'redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from 'reducers';

var buildStore;

if (__DEBUG__) {
  buildStore = compose(applyMiddleware(thunk), devTools(), createStore);
} else {
  buildStore = compose(applyMiddleware(thunk), createStore);
}

export default buildStore(combineReducers(reducers));
