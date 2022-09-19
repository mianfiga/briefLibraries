import React, {useState} from 'react';

class Counter2 extends React.Component {
  state = {
    count: 0
  };

  increase = () => this.setState({count: this.state.count + 1});
  decrease = () => this.setState({count: this.state.count - 1});

  render() {
    return (
      <div>
        <h2>My counter 2</h2>
        Count value is: {this.state.count}
        <button onClick={this.increase}>increment</button>
        <button onClick={this.decrease}>decrement</button>
      </div>
    );
  }
}

export default Counter2;
