import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [active, setActive] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    let inrerval = null;
    if (active) {
      inrerval = setInterval(run, 1000);
    } else {
      clearInterval(inrerval);
    }
    return () => clearInterval(inrerval);
  }, [active]);

  const run = () => {
    setSeconds((seconds) => seconds - 1);
  };

  useEffect(() => {
    if (active) {
        setDisabled(true);

      if (seconds === 0) {
        if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(60);
        }
      }
      if (minutes === 0) {
        if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(60);
        }
      }
      if (seconds === 0 && minutes === 0 && hours === 0) {
        setActive(false);
      }
    }
  }, [run]);

  const handleActive = () => {
    setActive(!active)
    setDisabled(!disabled)
  }

  const handleReset = () => {
    setActive(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setDisabled(false)
  };

  return (
    <div className="timer">
      <h1 className="timer__header">Timer</h1>
      <div className="timer__box">
        <div className="timer__hours">
          <button disabled={disabled} className="timer__button" onClick={() => setHours(hours + 1)}>
            +1
          </button>
          <p className="timer__time">{hours < 10 ? `0${hours}` : hours}</p>
          <button
            className="timer__button"
            disabled={disabled || hours <= 0 && 'disabled'}
            onClick={() => setHours(hours - 1)}
          >
            -1
          </button>
        </div>
        <div className="timer__minutes">
          <button
          disabled={disabled}
            className="timer__button"
            onClick={() => setMinutes(minutes + 1)}
          >
            +1
          </button>
          <p className="timer__time">
            {minutes < 10 ? `0${minutes}` : minutes}
          </p>
          <button
            className="timer__button"
            disabled={disabled || minutes <= 0 && 'disabled'}
            onClick={() => setMinutes(minutes - 1)}
          >
            -1
          </button>
        </div>
        <div className="timer__seconds">
          <button
          disabled={disabled}
            className="timer__button"
            onClick={() => setSeconds(seconds + 1)}
          >
            +1
          </button>
          <p className="timer__time">
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
          <button
            className="timer__button"
            disabled={disabled || seconds <= 0 && 'disabled'}
            onClick={() => setSeconds(seconds - 1)}
          >
            -1
          </button>
        </div>
      </div>
      <div className="timer__buttons">
        <button disabled={seconds === 0 && minutes === 0 && hours === 0 && 'true'} className="button" onClick={handleActive}>
          {active ? 'Stop' : 'Start'}
        </button>
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;