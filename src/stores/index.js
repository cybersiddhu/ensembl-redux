import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { devTools } from 'redux-devtools';
import * as reducers from 'reducers';
import {ensemblMiddleware} from '../middleware';

var buildStore;

if (__DEBUG__) {
  buildStore = compose(applyMiddleware(ensemblMiddleware), devTools(), createStore);
} else {
  buildStore = compose(applyMiddleware(ensemblMiddleware), createStore);
}

export default buildStore(combineReducers(reducers));
