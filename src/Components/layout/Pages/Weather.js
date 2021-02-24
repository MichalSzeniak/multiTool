import React, { useState, useEffect } from 'react';

const api = {
  key: '2faf5362af8831e653fa8cc1ca8dd326',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=',
};

const Weather = () => {
  const [input, setInput] = useState('');
  const [place, setPlace] = useState('');
  const [dane, setDane] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setPlace(input);
    setInput('');
  };

  const API = `${api.url}${place}&appid=${api.key}`;

  useEffect(() => {
      if (place) {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDane({name: data.name, temp: data.main.temp });
      });    }
  }, [place])


  return (
    <div className="list">
        <h1>Weather</h1>
      <form action="">
        <input className="form__input" type="text" placeholder="enter your place" name="" id="" value={input} onChange={handleInput} />
        <button className="form__button" onClick={handleClick}>Search</button>
      </form>
      <div>
          <h1>
              {dane.name}
          </h1>
          <h2>{dane.temp}</h2>
      </div>
    </div>
  );
};

export default Weather;
