import React from 'react';
import CounterFunction from './class-component/CounterClass';
import CounterClass from './functional-component/CounterFunction';
import ClockClass from './class-component/ClockClass';
import ClockFunction from './functional-component/ClockFunction'

// I'm so sorry for how massive I made the code!!
// I tried being very thorough in my explanations,
// but it got pretty huge before I knew it...
// It may not look like it (because of all my comments),
// but functional(with hooks) components really
// do make your code a lot more condensed, so 
// if you want to see for yourself, delete the
// comments to see the length difference.
//
// Also, I recommend you look at the files to the left
// in this order:
// 1. ./class-component/CounterClass.js
// 2. ./functional-component/CounterFunction.js
// 3. ./class-component/ClockClass.js
// 4. ./functional-component/ClockFunction.js
// 
// P.S. Remember to 'npm install' before you try 
//      'npm start'. You'll need to install the 
//      dependencies before you can run this code!
//      GOOD LUCK! And don't be afraid to play 
//      with the code :)

function App() {
  return (
    // * uncomment one at a time
    <div>
      {/* Class components */}
      {/* <CounterClass /> */}
      {/* <ClockClass /> */}


      {/* Functional Components */}
      {/* These are the ones that use hooks instead of classes. */}
      {/* <CounterFunction /> */}
      {/* <ClockFunction /> */}
    </div>
  );
}

export default App;
