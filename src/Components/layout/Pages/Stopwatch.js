import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [active, setActive] = useState(false);
  const [stop, setStop] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  const handleActive = () => {
    setActive(true);
  };

  const handlePause = () => {
    setActive(false);
    setStop(true);
  };

  const handleReset = () => {
    setActive(false);
    setStop(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setMilliseconds(0);
  };

  useEffect(() => {
    let inrerval = null;
    if (active) {
      inrerval = setInterval(run, 10);
    } else {
      clearInterval(inrerval);
    }
    return () => clearInterval(inrerval);
  }, [active]);

  const run = () => {
    setMilliseconds((milliseconds) => milliseconds + 1);
  };

  useEffect(() => {
    if (milliseconds === 100) {
      setMilliseconds(0);
      setSeconds((seconds) => seconds + 1);
    }
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((minutes) => minutes + 1);
    }
    if (minutes === 60) {
      setMinutes(0);
      setHours((hours) => hours + 1);
    }
  }, [run]);

  return (
    <div className="stopwatch">
      <h1 className="stopwatch__header">Stopwatch</h1>
      <div className="timeBox">
        <p>
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds},
        </p>
        <p className="miliseconds">{milliseconds < 10 ? `0${milliseconds}` : milliseconds}</p>
      </div>
      <div>
        <button className={active ? 'none' : 'button'} onClick={handleActive}>
          {stop ? 'Resume' : 'Start'}
        </button>
        <button className={active ? 'button' : 'none'} onClick={handlePause}>
          Stop
        </button>
        <button className={stop ? 'button' : 'none'} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
