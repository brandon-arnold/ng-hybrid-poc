'use strict';

export const FETCH_HELLO_WORLDS = 'FETCH_HELLO_WORLDS';
export const RECEIVE_HELLO_WORLDS = 'RECEIVE_HELLO_WORLDS';

export function fetchHelloWorlds() {
  return (dispatch) => {
    dispatch(receiveHelloWorlds([
      'Hello, world!',
      'Hello world!',
      'Hellooooo, world!',
      'Hello. WORLD!',
      'Hello...world.'
    ]));
  };
}

export function receiveHelloWorlds(helloWorlds) {
  return {
    type: RECEIVE_HELLO_WORLDS,
    payload: helloWorlds
  };
}

export function resetState() {
  return (dispatch) => {
    dispatch(receiveHelloWorlds([]));
  };
}
