/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useReducer, Reducer } from 'react';

interface Person {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
}

export default function StatePatterns() {
  return <div>StatePatterns</div>;
}

/*
 * Call useState for each "piece" of state you're working with
 * PROS: Independently set state for different variables
 * CONS: Multiple state properties in a component might be an indicator that you
 * should break that component into smaller components
 */
function MultipleUseStates() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Smith');
}

// Bind all your state into an object. Great if it's all related like
// a Person or a Transaction or similar type
function StateAsObject() {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Smith',
    city: 'New York',
    state: 'NY',
  });

  let nextFirstName = 'Jane';
  setPerson({
    firstName: nextFirstName,
    lastName: person.lastName,
    city: person.city,
    state: person.state,
  });

  setPerson({ ...person, firstName: nextFirstName });
}

let initialState: Person = {
  firstName: 'John',
  lastName: 'Paxton',
  city: 'Nutley',
  state: 'NJ',
};

type Action = {
  type: string;
  [key: string]: string;
};

let reducer: Reducer<Person, Action> = (state, action) => {
  switch (action.type) {
    case 'change_firstName':
      return { ...state, firstName: action.firstName };
    case 'change_lastName':
      return { ...state, lastName: action.lastName };
    case 'change_city':
      return { ...state, city: action.city };
    case 'change_state':
      return { ...state, state: action.state };
  }
  throw Error('unknown action type: ' + action.type);
};

function ReducerState() {
  let [state, dispatch] = useReducer<typeof reducer>(reducer, initialState);

  let someEventHandler = (someValue: string) => {
    dispatch({ type: 'change_city', city: someValue });
  };
}
