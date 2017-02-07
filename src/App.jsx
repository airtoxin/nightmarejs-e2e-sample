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
          className="increment"
          onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button
          className="decrement"
          onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
        <button
          className="increment-async"
          onClick={() => setTimeout(() => this.setState({ count: this.state.count + 1 }), 1000)}>
          Increment async
        </button>
      </div>
    );
  }
}
