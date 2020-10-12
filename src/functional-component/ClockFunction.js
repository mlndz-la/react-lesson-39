import React, { useEffect, useState } from 'react';

function Clock (props) {
  // Remember how I mentioned you can invoke useState more than once? 
  // Here's an example of having multiple useStates, and thereby
  // multiple state values.
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  // useEffect is pretty much a combination of the old 
  // 3 lifecycle methods found in class components.
  //
  // 1. componentDidMount
  // 2. componentDidUpdate
  // 3. componentWillUnmount
  //
  // It runs once when the DOM has rendered
  // It runs again on every render (unless specified otherwise)
  // And it runs again when a component unmounts
  //
  // useEffect accepts up to 2 arguments. 
  // The first is a callback function and the
  // second is an array.
  //
  // The callback function can do whatever you want,
  // it doesn't return anything (unless it's a function
  // that cleans up after components like componentWillUnmount)
  // it can set up event listeners or do api calls after
  // the page has loaded. Whatever you used to put in
  // componentDidMount and componentDid update, you 
  // can do in here.
  // 
  // Normally, like I said before, the callback function 
  // passed into useEffect doesn't return anything, UNLESS 
  // it's to return a callback function that 
  // acts as a cleanup function. Like to clean
  // up a setInterval or clear up some event handlers
  // when a component unmounts. In other words, 
  // the function useEffect returns acts like the
  // lifecycle method componentWillUnmount

  // The array you can pass in as the second parameter
  // is optional. Meaning you can omit it. If you choose
  // to omit it, that useEffect will run every time there's 
  // a render (just like componentDidUpdate), but if you 
  // choose to give useEffect an empty array as the
  // second parameter, then useEffect will behave like 
  // componentDidMount and only run once after the
  // DOM has loaded.
  //
  // Ex. useEffect(() => { //some api call }, [])
  // The above will only run once because it was passed an 
  // empty array. While the below will run every time
  // there's an update.
  // Ex. useEffect(() => { //checking some values})
  // 
  // The items in the array act as conditionals, they're like
  // your 'only run if this value changes'. They're what's called
  // your 'dependencies'. The only things
  // you can put in your array are state and prop values.
  // Whenever you mention a state or prop value, you
  // must add them to the dependency array, so 
  // if you mention a state value called 'count' or
  // 'seconds', you must list it in the array
  // and pass it in to useEffect, like so
  // Ex. useEffect(() => { //do something }, [count, seconds])
  // This means this useEffect will only run if count or seconds
  // change.
  // Mind you, only state and props must be listed, but if you
  // only used their setState functions in your useEffect,
  // and not the state values themselves,
  // don't list them as dependencies.
  //
  // Anyway, last but not least, you can have as many useEffects
  // as you want, that way you can have an effect that only runs once,
  // and another effect that only runs when certain values change,
  // or another effect that runs every single time something changes.
  // or you can have all three or more!
  // The sky is the limit, get creative and add in as
  // many or as a little effects as you want because
  // sometimes you might want an effect that only changes sometimes, 
  // and sometimes you want another to only run once or to
  // run every time. It's up to you! The sky is the limit.  
  useEffect(() => {
    setInterval(() => {
      setHour(new Date().getHours());
      setMinute(new Date().getMinutes());
      setSecond(new Date().getSeconds());
    }, 500);
  }, [])

  return (
      <div style={{textAlign: 'center', fontSize: "50px"}}>
        {`${hour}: ${minute}: ${second}`}
      </div>
  );
}

export default Clock;