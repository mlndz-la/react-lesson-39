import React, { useState } from 'react';

const CounterFunction = () => {
  const [counter, setCounter] = useState(0);
  
  return (
    <div style={{textAlign: 'center', fontSize: "50px"}}>
      <p>{counter > 5? 'too many numbers': counter}</p>
      <button
        onClick={() => {setCounter(prevCounter => prevCounter + 1)}}
      >Increment</button>
    </div>
  );
}

export default CounterFunction;