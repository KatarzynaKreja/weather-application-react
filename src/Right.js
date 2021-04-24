import React from "react";
import "./Right.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Right(props) {
  return (
    <div className="Right">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              <span id="temp"> {Math.round(props.data.temperature)} </span>
              <span id="celsius-link" className="active">
                ºC
              </span>
              | <span id="fahrenheit-link">ºF</span>
              <li id="humidity">{props.data.humidity} %</li>
              <li id="wind">{Math.round(props.data.wind)} km/h</li>
              <li id="description">{props.data.description}</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
