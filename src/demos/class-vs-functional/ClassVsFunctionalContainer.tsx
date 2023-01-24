import React from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

export default function ClassVsFunctionalContainer() {
  return (
    <div className="row">
      <div className="col">
        <FunctionalComponent />
      </div>
      <div className="col">
        <ClassComponent />
      </div>
    </div>
  );
}
