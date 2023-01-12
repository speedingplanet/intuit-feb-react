import React, { useState } from 'react';

export default function CounterState() {
  let [counter, setCounter] = useState(0);

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-header">State-enabled Counter</div>
          <div className="card-body">
            <div>
              <span>Counter: {counter}</span>
            </div>

            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  console.log('Adding to the counter');
                  setCounter(counter + 1);
                }}>
                Add
              </button>
              <button className="btn btn-primary">Subtract</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
