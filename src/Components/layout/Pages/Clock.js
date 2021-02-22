import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => dateUpdate(), 1000);
  });

  const dateUpdate = () => {
    setDate(new Date());
  };

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear()

  return (
    <div className="clockSection">
      <h2 className="clock">
        {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()} :{' '}
        {date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}{' '}
      </h2>
      <p className="date">{day < 10 ? `0${day}` : day}.{month < 10 ? `0${month}` : month}.{year}</p>
    </div>
  );
};

export default Clock;
