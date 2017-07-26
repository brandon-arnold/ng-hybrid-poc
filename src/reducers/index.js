import {
  FETCH_NEW_HELLO_WORLD,
  RECEIVE_NEW_HELLO_WORLD
} from '../actions';

export const initialState = {
  helloWorlds: {
    collection: []
  }
};

export const helloWorlds = (helloWorldState = { collection: [] }, action) => {
  switch(action.type) {
    case RECEIVE_NEW_HELLO_WORLD:
      return Object.assign({}, helloWorldState, {
        collection: [...helloWorldState.collection, action.payload]
      });
    default:
      return helloWorldState;
  }
}
