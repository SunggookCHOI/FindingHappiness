import React, { Component } from 'react';

class Counter extends Component {
  state = {
    id: 0
  }

  handleIncrease = () => {
    this.setState({
        id: this.state.id + 1
    });
    console.log(this.state.id);
  }

  handleDecrease = () => {
    this.setState({
        id: this.state.id - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.id}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;