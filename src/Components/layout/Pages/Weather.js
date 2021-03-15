import React, { useState, useEffect } from 'react';
import cloud from '../../../Assets/cloud.svg';
import wind from '../../../Assets/wind.svg';

const api = {
  key: '2faf5362af8831e653fa8cc1ca8dd326',
  url: 'https://api.openweathermap.org/data/2.5/weather?q=',
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

  const API = `${api.url}${place}&units=metric&appid=${api.key}`;

  useEffect(() => {
    if (place) {
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDane({
            name: data.name,
            temp: `${data.main.temp.toFixed()}°C`,
            country: data.sys.country,
            clouds: `${data.clouds.all} %`,
            wind: `${data.wind.speed.toFixed(1)} m/s`,
            description: `${data.weather[0].description}`,
          });
        });
    }
  }, [place]);

  return (
    <div className="weather">
      <h1 className="weather__header">Weather</h1>
      <form action="">
        <input
          className="form__input"
          type="text"
          placeholder="enter your place"
          name=""
          id=""
          value={input}
          onChange={handleInput}
        />
        <button className="form__button" onClick={handleClick}>
          Search
        </button>
      </form>
      <div className="weather__content">
        <p className="weather__content--name">{dane.name}</p>
        <p>{dane.country}</p>
        <p className="weather__content--temp">{dane.temp}</p>
        <div className={place ? "weather__other-content" : "none"}>
          <div className="weather__box">
            <img className="weather__img" src={cloud}/>
            <span className="clouds">{dane.clouds}</span>
          </div>
          <div className="weather__box">
          <img className="weather__img" src={wind}/>
            <span className="wind">{dane.wind}</span>
          </div>
        </div>
        <span>{dane.description}</span>
      </div>
    </div>
  );
};

export default Weather;
