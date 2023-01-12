import React from 'react';

export default function ComponentCommunication() {
  return (
    <div>
      <h3>Component Communication</h3>
      <Parent />
    </div>
  );
}

function Parent() {
  return (
    <section style={{ border: '2px dotted red', padding: '10px' }}>
      <div className="row">
        <div className="col">
          <SiblingOne />
        </div>
        <div className="col">
          <SiblingTwo message="The button was NOT clicked" />
        </div>
      </div>
    </section>
  );
}

function SiblingOne() {
  let handleClick = () => {
    console.log('You clicked on the button!');
  };

  return (
    <div style={{ border: '2px dashed green' }}>
      <p>SiblingOne (me) wants to tell SiblingTwo that the button was clicked.</p>
      <button className="btn btn-primary" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

interface SiblingTwoProps {
  message: string;
}

function SiblingTwo({ message }: SiblingTwoProps) {
  return (
    <div style={{ border: '2px dashed blue' }}>
      <p>Sibling Two</p>
      <p>{message !== '' ? message : "I don't know if the button was clicked."}</p>
    </div>
  );
}
