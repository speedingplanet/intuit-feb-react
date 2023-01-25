import React, { useState } from 'react';

// Controlled components have two-way data binding:
// Update a React state variable when the form field changes...
// Update the form field when a React variable changes (usually state)
export default function MinimalInput() {
  let [input, setInput] = useState('');

  let handleTextInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`Form field value: ${event.currentTarget.value}`);
    setInput(event.currentTarget.value);
  };

  return (
    <div>
      <input type="text" onChange={handleTextInput} value={input} />
    </div>
  );
}
