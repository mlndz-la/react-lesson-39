import React from 'react';
// Comments done by Erick and Janis!
// Feel free to message me (Janis) 
// if you have any further questions :) 
// Although, you can totally message
// Erick too! He's a total sweetheart
// and I know he'd be happy to help 
// if you asked him too!
export default class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
    // unlike with hooks, methods that update state
    // (in class components) must be bound to the class
    // or an error of 'cannot set state of undefined'
    // will occur. Always remember to bind methods that
    // change state.
    this.increment = this.increment.bind(this)
  }
  increment() {
    // setState can either accept 2 things:
    // 1. an object that completely replaces the old state
    // 2. a callback function whose first parameter is the 
    //    previous state and returns the value of the new state.
    // You're probably wondering why this might be useful!
    // Because let's say your state depends on what the previous
    // state was. Like, a counter, where you have to look at the old 
    // state before your can increment it. Or if let's say the previous
    // value was an 'x' and you want it to change to 'o' if it was or 
    // an 'x' if it was an 'o', you can in the callback function 
    // because setState always gives the previous state
    // to the callback. There's another benefit...
    this.setState(prevState => {
      // Let's say you only had one value from state you wanted to update.
      // You might say, 'great! I'll just pass in a new object to setState that
      // only changes that one value.'.
      // While that would work if you only had one property in state,
      // it wouldn't work if you had 20 other properties in state.
      // Remember, the object you pass into setState, REPLACES the old state.
      // So if you were to just pass in a new object that just incremented 
      // the counter property of state, what would happen to the rest of 
      // your properties? You would lose them.
      // So it's best to use the callback function to create a new
      // state and fill it up with all the previous values of the old
      // state, then just update the property you need to, and 
      // return that new state, so it'll become the new state.
      const newState = {
        ...prevState, 
        counter: prevState.counter + 1
      }
      // ... don't forget to return the newState
      return newState
    })
  }
  render() {
    // This is object destructuring btw. You can
    // pull out the property you need from state
    // by declaring it in a const and surrounding it
    // by curly brackets and equaling it to state.
    // it'll pull that property out of the whatever 
    // object you're assigning it to as long as 
    // it has the same property name as in the object.
    // That way to reference that state property later, 
    // all you have to do is use 'counter' (as done in line 70)
    // instead of 'this.state.counter' 
    const {counter} = this.state
    return (
      <div style={{textAlign: 'center', fontSize: "50px"}}>
        <p>{counter}</p>
        <button onClick={this.increment}>increment</button>
      </div>
    )
  }
}