'use strict';

export const FETCH_NEW_HELLO_WORLD = 'FETCH_NEW_HELLO_WORLD';
export const RECEIVE_NEW_HELLO_WORLD = 'RECEIVE_NEW_HELLO_WORLD';

let helloWorldVariations = [
  'Hello, world!',
  'Hello world!',
  'Hellooooo, world!',
  'Hello. WORLD!',
  'Hello...world.',
  'HELLO WORLDDDDD!',
  'Hello. World?',
  'Hello? World?',
  'Hell! O...world!'
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function fetchNewHelloWorld() {
  return (dispatch, state) => {
    var newHelloWorld = helloWorldVariations[getRandomInt(0, helloWorldVariations.length)];
    dispatch(receiveNewHelloWorld(newHelloWorld));
  };
}

export function receiveNewHelloWorld(newHelloWorld) {
  return {
    type: RECEIVE_NEW_HELLO_WORLD,
    payload: newHelloWorld
  };
}

export function resetState() {
  return (dispatch) => {
    dispatch(receiveNewHelloWorld([]));
  };
}
