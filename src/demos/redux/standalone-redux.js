/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
let { createStore } = require('@reduxjs/toolkit');

let initialState = 0;

let reducer = (state, action) => {
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

let store = createStore(reducer, initialState);

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

class CounterManager {
  // Private variable
  #counter = 0;

  // store.dispatch({type: 'increment'})
  increment() {
    this.counter = this.counter + 1;
  }

  // store.dispatch({type: 'decrement'})
  decrement() {
    this.counter = this.counter - 1;
  }

  // store.dispatch({ type: 'incrementByAmount', amount: ? });
  incrementByAmount(amount) {
    this.counter = this.counter + amount;
  }

  // store.getState()
  getCounter() {
    return this.counter;
  }
}
