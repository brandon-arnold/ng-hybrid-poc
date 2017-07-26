import {
  FETCH_NEW_HELLO_WORLD,
  RECEIVE_NEW_HELLO_WORLD
} from '../actions';

export const initialState = {
  helloWorlds: {
    collection: []
  }
};

export const helloWorlds = (helloWorldState = initialState, action) => {
  debugger;
  switch(action.type) {
    case RECEIVE_NEW_HELLO_WORLD:
      var newState = Object.assign({}, helloWorldState, {
        helloWorlds: Object.assign({}, helloWorldState.helloWorlds, {
          collection: [...helloWorldState.helloWorlds.collection, action.payload]
        })
      });

      return newState;
    default:
      return helloWorldState;
  }
}
