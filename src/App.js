import React from 'react';
import CounterFunction from './class-component/CounterClass';
import CounterClass from './functional-component/CounterFunction';
import ClockClass from './class-component/ClockClass';
import ClockFunction from './functional-component/ClockFunction'

function App() {
  return (
    // * Comment out all but one component
    <div>
      {/* Class components */}
      <CounterClass />
      <ClockClass />
      {/* Functional Components */}
      <CounterFunction />
      <ClockFunction />
    </div>
  );
}

export default App;
