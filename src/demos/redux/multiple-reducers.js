/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
let { createStore, combineReducers } = require('@reduxjs/toolkit');

let initialState = {
  counter: 10,
  names: ['Manish'],
};

let reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    case 'decrement':
      return { ...state, counter: state.counter - 1 };
    case 'incrementByAmount':
      return { ...state, counter: state.counter + action.amount };
    case 'addName':
      return { ...state, names: [...state.names, action.name] };
    default:
      return state;
  }
};

let counterReducer = (state = 0, action) => {
  console.log('Ran counterReducer: ' + Date.now());
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'incrementByAmount':
      return state + action.amount;
    default:
      return state;
  }
};

let namesReducer = (state = [], action) => {
  switch (action.type) {
    case 'addName':
      return [...state, action.name];
    default:
      return state;
  }
};

let mainReducer = combineReducers({
  counter: counterReducer,
  names: namesReducer,
});

let store = createStore(mainReducer, initialState);

console.log('Initial state of the store: ', store.getState());
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });

console.log('Current state of the store:', store.getState());
store.dispatch({ type: 'decrement' });
console.log('Current state of the store:', store.getState());

store.dispatch({ type: 'double' });
console.log('Current state of the store:', store.getState());

store.dispatch({ type: 'incrementByAmount', amount: 5 });
console.log('Current state of the store:', store.getState());

store.dispatch({ type: 'addName', name: 'John' });
console.log('Current state of the store:', store.getState());
