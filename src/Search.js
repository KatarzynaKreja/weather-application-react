import React, { useState } from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Left from "./Left";
import Right from "./Right";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function changeWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    console.log(weatherData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "f77cad6d452d84a939c49b6eacf724ee";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(changeWeather);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="search">
        {" "}
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a city"
            autoFocus="on"
            id="search-input"
            className="search"
            onChange={changeCity}
          />
          <input type="submit" className="btn" id="search" value="Search" />
          <button type="button" className="btn" id="current">
            📌
          </button>
        </form>
        <div className="row">
          <div className="col">
            <Left data={weatherData} />{" "}
          </div>
          <div className="col">
            {" "}
            <Right data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
