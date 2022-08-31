import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const Timer = () => { 
    const [time, setTime] = useState(0);
    const [active, SetActive] = useState(false); 
    useEffect(() => {
        let interval;
        if (active) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10);
        } else if (!active) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [active]);
      return (
        <div className="stopwatch">
          <div className="numbers">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>
          <div className="buttons">
            <Button onClick={() => SetActive(true)} variant="primary">Start</Button>
            <Button onClick={() => SetActive(false)} variant="primary">Stop</Button>
            <Button onClick={() => SetActive(0)} variant="primary">Reset</Button>
          </div>
        </div>
      );
};

export default Timer;