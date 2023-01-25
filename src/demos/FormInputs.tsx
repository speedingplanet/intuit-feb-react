import React, { useState } from 'react';

export default function FormInputs() {
  let [textInput, setTextInput] = useState('');
  let [selectInput, setSelectInput] = useState('');

  return (
    <>
      <div className="row">
        <div className="col">
          <h3>Form inputs and React</h3>
        </div>
      </div>
      <div className="row pb-3">
        <div className="col">
          <div>
            <label htmlFor="ex-text-input" className="form-label">
              Text input
            </label>
            <input
              type="text"
              className="form-control"
              id="ex-text-input"
              placeholder="placeholder text"
              value={textInput}
              onChange={(e) => setTextInput(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="col">
          <p>The value of the form field is {textInput}</p>
        </div>
      </div>
      <div className="row pt-3 border-top">
        <div className="col">
          <label htmlFor="ex-select">Select List</label>
          <select
            className="form-select"
            id="ex-select"
            value={selectInput}
            onChange={(e) => setSelectInput(e.currentTarget.value)}>
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col">
          <p>The select value is {selectInput}</p>
        </div>
      </div>
    </>
  );
}

interface BootstrapInputProps extends React.ComponentPropsWithoutRef<'input'> {
  containerClass: string;
  labelClass: string;
}

export function BootstrapInput(props: BootstrapInputProps) {
  let { containerClass, labelClass, ...rest } = props;

  return (
    <div className={containerClass}>
      <label htmlFor={rest.id} className={`form-label ${labelClass}`}>
        Text input
      </label>
      <input
        type={rest.type ?? 'text'}
        className={`form-control ${rest.className}`}
        id={rest.id}
        {...rest}
      />
    </div>
  );
}
