import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: null,
      minute: null,
      seconds: null
    };
  }
  
  componentDidMount() {
    setInterval(()=>{
      this.setState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      })
    }, 1000)
  }

  render() {
    const {hour, minute, seconds} = this.state
    return (
      <div style={{textAlign: 'center', fontSize: "50px"}}>
        <p>Current Time</p>
        <p>{`${hour} : ${minute} : ${seconds}`}</p>
      </div>
    )
  }
}

export default Clock