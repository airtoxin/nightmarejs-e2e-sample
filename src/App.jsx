import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>Counts: {this.state.count}</h1>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button
          onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
        <button
          onClick={() => setTimeout(() => this.setState({ count: this.state.count + 1 }), 1000)}>
          Increment async
        </button>
        <ul>
          <li>
            <button onClick={() => this.setState({ count: this.state.count + 10 })}>+10</button>
            <button onClick={() => this.setState({ count: this.state.count + 300 })}>+300</button>
            <button onClick={() => this.setState({ count: this.state.count + 575 })}>+575</button>
          </li>
        </ul>
      </div>
    );
  }
}
