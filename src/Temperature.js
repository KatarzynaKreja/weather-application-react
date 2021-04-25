import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertTemp() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="units"> ºC</span>|
        <a href="/" onClick={showFahrenheit}>
          ºF
        </a>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="temp">{Math.round(convertTemp())} </span>
        <a href="/" onClick={showCelsius}>
          ºC
        </a>
        |<span className="units">ºF</span>
      </div>
    );
  }
}
