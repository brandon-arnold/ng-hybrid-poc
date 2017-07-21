import { combineReducers } from 'redux';

import {
  FETCH_HELLO_WORLDS,
  RECEIVE_HELLO_WORLDS
} from '../actions';

export const initialState = {
  helloWorlds: {
    collection: []
  }
};

export const helloWorlds = (helloWorldState = { collection: [] }, action) => {
  switch(action.type) {
    case RECEIVE_HELLO_WORLDS:
      return Object.assign({}, helloWorldState, {
        collection: action.payload
      });
    default:
      return helloWorldState;
  }
}
