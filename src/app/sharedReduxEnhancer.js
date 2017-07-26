import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { helloWorlds } from '../reducers';

var store = createStore(helloWorlds, applyMiddleware(thunkMiddleware));

export default function sharedReduxEnhancer(createStore) {
  return () => store;
};
