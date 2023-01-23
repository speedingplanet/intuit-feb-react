import React, { Component } from 'react';

/*
 * Three areas to compare between functional and class-based components:
 * - event handling
 * - state
 * - lifecycle
 *
 */

export default class ClassComponent extends Component<unknown, { counter: number }> {
  counter = 0;

  constructor(props: unknown) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  // useEffect(() => void; [])
  componentDidMount(): void {
    console.log('componentDidMount: The component has been mounted into the DOM');
  }

  // useEffect(() => void)
  componentDidUpdate(
    prevProps: Readonly<unknown>,
    prevState: Readonly<{ counter: number }>,
    snapshot?: unknown
  ): void {
    console.log('componentDidUpdate: The component has updated for some reason.');
  }

  // useEffect(() => { return componentWillUnmount})
  componentWillUnmount(): void {
    console.log('componentWillUmount: The ClassComponent is about to unmount');
  }

  // Explicit render method for returning information
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <button className="btn btn-danger" onClick={this.handleClick}>
            Class-based Click
          </button>
          &nbsp;<span>{this.state.counter}</span>
        </div>
      </div>
    );
  }
}
