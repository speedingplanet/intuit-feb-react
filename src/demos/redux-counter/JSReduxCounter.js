import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect, Provider } from 'react-redux';

const initialState = { counter: 1 };

// Action types
const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

// Action creators
const addOne = () => ({ type: actions.INCREMENT });
const subtractOne = () => ({ type: actions.DECREMENT });

const reducer = (state = initialState, action) => {
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

function Counter({ value, increment, decrement }) {
  return (
    <div className="card">
      <div className="card-header bg-secondary">Old-style Redux-enabled counter</div>
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

// mapReduxStateToComponentDisplay
const mapStateToProps = (state) => ({
  // nameOfPropertyInComponent: state.nameOfPropertyInRedux
  value: state.counter,
});

// mapReduxDispatcherToComponentEvents
const mapDispatchToProps = (dispatch) => ({
  // nameOfCustomEventOnComponent: dispatch an action to Redux
  increment: () => dispatch({ type: 'increment' }),
  decrement: () => dispatch({ type: 'decrement' }),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

/*
const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
const ConnectedComponent = reduxConnector(Counter);
*/

export default function ReduxContainer() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}
