import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
    this.increment = this.increment.bind(this)
  }
  increment() {
    this.setState(prevState => {
      const newState = {
        ...prevState, 
        counter: prevState.counter + 1
      }
      return newState
    })
  }
  render() {
    const {counter} = this.state
    return (
      <div style={{textAlign: 'center', fontSize: "50px"}}>
        <p>{counter}</p>
        <button onClick={this.increment}>increment</button>
      </div>
    )
  }
}