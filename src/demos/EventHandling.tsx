import React, { MouseEvent } from 'react';

export default function EventHandling() {
  let styles = {
    cursor: 'pointer',
    backgroundColor: 'blue',
    color: 'white',
  };

  let handleParagraphClick = () => {
    console.log('You clicked on the paragraph!');
  };

  let handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    // console.log('Successfully clicked the button.');
    console.log('The button says "' + event.currentTarget.textContent + '"');
    console.log('Event object:', event);
  };

  let handleRedHover = (event: MouseEvent<HTMLElement>) => {
    // console.log('Way to hover over the red word!');
    console.log('The word is "' + event.currentTarget.textContent + '"');
  };

  let handleRedLeave = () => {
    console.log('Good-bye!');
  };

  return (
    <div>
      <p onClick={handleParagraphClick} style={{ cursor: 'pointer' }}>
        Click on this paragraph.
      </p>
      <p>
        Click only on the button. <button onClick={handleButtonClick}>Hello!</button>
      </p>
      <p>
        Click only on{' '}
        <span
          style={{ color: 'red', cursor: 'pointer' }}
          onMouseEnter={handleRedHover}
          onMouseLeave={handleRedLeave}>
          the
        </span>{' '}
        red word.
      </p>
    </div>
  );
}
