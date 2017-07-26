import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { helloWorlds, initialState } from '../reducers';

var store = createStore(helloWorlds, initialState, applyMiddleware(thunkMiddleware));

export function sharedReduxEnhancer(createStore) {
  return () => store;
};