import React, { useState } from 'react';
import DemoOne from './DemoOne';
import DemoTwo from './DemoTwo';

export default function ToggleVisibility() {
  let [isDemoOneVisible, showDemoOne] = useState(false);
  let [isDemoTwoVisible, showDemoTwo] = useState(false);

  const handleToggleVisibility = (route: string) => {
    if (route === 'one') {
      showDemoOne(true);
      showDemoTwo(false);
    } else if (route === 'two') {
      showDemoTwo(true);
      showDemoOne(false);
    }
  };

  return (
    <div className="row">
      <div className="col-2">
        <ul>
          <li onClick={() => handleToggleVisibility('one')}>Demo One</li>
          <li onClick={() => handleToggleVisibility('two')}>Demo Two</li>
        </ul>
      </div>
      <div className="col">
        <div hidden={!isDemoOneVisible}>
          <DemoOne />
        </div>
        <div hidden={!isDemoTwoVisible}>
          <DemoTwo />
        </div>
      </div>
    </div>
  );
}
