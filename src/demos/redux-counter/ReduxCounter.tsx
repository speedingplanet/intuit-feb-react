import React from 'react';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, Reducer, AnyAction, Dispatch } from '@reduxjs/toolkit';

const initialState = { counter: 1 };
type ReduxState = typeof initialState;

// Action types
const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

// Action creators
const addOne = () => ({ type: actions.INCREMENT });
const subtractOne = () => ({ type: actions.DECREMENT });

const reducer: Reducer<ReduxState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { counter: state.counter + 1 };
    case actions.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

interface CounterProps {
  value: number;
  increment: typeof addOne;
  decrement: typeof subtractOne;
}

export function Counter({ value, increment, decrement }: CounterProps) {
  return (
    <div className="card">
      <div className="card-header bg-secondary">Old-style Redux-enabled counter (TS)</div>
      <div className="card-body">
        <div className="text-center mb-4">
          <h3>{value}</h3>
        </div>
        <div className="text-center">
          <button className="btn btn-danger" onClick={decrement}>
            <span role="img" aria-label="heavy minus sign">
              ➖
            </span>
            <br />
            <span>Decrement</span>
          </button>
          &nbsp;
          <button className="btn btn-success" onClick={increment}>
            <span role="img" aria-label="heavy plus sign">
              ➕
            </span>
            <br />
            <span>Increment</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: ReduxState) => ({
  value: state.counter,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(addOne()),
  decrement: () => dispatch(subtractOne()),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default function ReduxContainer() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}
