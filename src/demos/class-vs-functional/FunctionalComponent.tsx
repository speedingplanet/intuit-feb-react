import React, { useState, useEffect } from 'react';

/*
 * Three areas to compare between functional and class-based components:
 * - event handling
 * - state
 * - lifecycle
 *
 */

// The entire function is basically the render() method
export default function FunctionalComponent() {
  const [counter, setCounter] = useState(0);

  // similar to componentDidUpdate, with a little of componentDidMount
  useEffect(() => {
    console.log('FC: Runs every time the component updates or mounts');
  }); // No dependencies array

  // similar to componentDidMount
  useEffect(() => {
    console.log('FC: Runs once, similar to componentDidMount');
    // ...returns a function that runs when this component is destroyed'

    // Like componentWillUnmount
    return () => {
      console.log('FC: The FunctionalComponent is about to be destroyed.');
    };
  }, []); // Empty dependencies array

  // Not similar to other lifecycle evers
  useEffect(() => {
    console.log('FC: Updates when the counter updates:', counter);
  }, [counter]); // Dependencies array with one or more values

  let handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="card">
      <div className="card-body">
        <button className="btn btn-primary" onClick={handleClick}>
          Functional Click
        </button>
        &nbsp;<span>{counter}</span>
      </div>
    </div>
  );
}
