import React, { useState } from 'react';
// any hook you might need, you'll have to import it
// by name into your react file. If you don't,
// you'll have to invoke it by React.useState or
// React.useEffect or React.useContext, etc, etc.


// functional components can also receives props just like class
// components and in the same way, but unlike class components,
// you don't reference it as 'this.props.something', you just write 
// 'props.something'. Other than that, they work the exact same way
// as class component props
function CounterFunction(props) {
  // The useState hook accepts 1 argument, the initial value of state.
  // Just like in class components, the initial value can be anything!
  // For example, a string, a boolean, a number, object, whatever you want!
  // 
  // Anyway, useState accepts the value of initial State as an argument, and
  // it returns an array. An array where the first element is your state and
  // the second element is the function that updates that state. [state, setState]
  // Through array destructuring (what you see happening in line 19),
  // we're able to pull out those two elements, so we can refer to them by
  // name rather than by stateArr[0] and stateArr[1].
  // You can give them whatever name you want, but best practice is to 
  // name the state something useful like, isLoading, counter or url, and
  // have the function be called set[whatever name you gave it], so if your
  // state variable was called 'counter' call your function 'setCounter'
  // or isLoading to 'setIsLoading'.
  //
  // The setFunction useState returns works the exact same way the old
  // this.setState did. It accepts either the object that will replace 
  // the previous state or it'll accept a callback function that'll 
  // accept the previousState as it's parameter and return the newState.
  //
  // You can invoke useState as many times as you want in your code.
  // That way you can have more than one state property if you need it
  // rather than keep it all in one object. Having all your state properties
  // separate makes it less likely that you'll accidentally delete your 
  // other states.
  //
  // The best part? Unlike in class components, because the function that
  // useState returns ONLY changes the state property it came with, there's
  // absolutely no need to remember to bind the setCounter function to your
  // current state because that's all it can ever change whenever you invoke 
  // it. Also... it's not a class component, so you wouldn't be able to bind
  // it even if you wanted to, so no worries.
  const [counter, setCounter] = useState(0);
  
  return (
    <div style={{textAlign: 'center', fontSize: "50px"}}>
      <p>{counter > 5? 'too many numbers': counter}</p>
      <button
        onClick={() => setCounter(prevCounter => prevCounter + 1)}
      >Increment</button>
    </div>
  );
}

export default CounterFunction;