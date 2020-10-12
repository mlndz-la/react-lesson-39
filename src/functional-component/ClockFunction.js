import React, { useEffect, useState } from 'react';

function Clock (props) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setHour(new Date().getHours());
      setMinute(new Date().getMinutes());
      setSecond(new Date().getSeconds());
    }, 500);
  })

  return (
      <div style={{textAlign: 'center', fontSize: "50px"}}>
        {`${hour}: ${minute}: ${second}`}
      </div>
  );
}

export default Clock;