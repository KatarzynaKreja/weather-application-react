import React, { useState } from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Left from "./Left";
import Right from "./Right";

export default function Search() {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState(" ");
  let [weather, setWeather] = useState("");
  function changeWeather(response) {
    setLoaded(true);
    console.log(response);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "f77cad6d452d84a939c49b6eacf724ee";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(changeWeather);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
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
          <Left />{" "}
        </div>
        <div className="col">
          {" "}
          <Right data={weather} />
        </div>
      </div>
    </div>
  );
}
