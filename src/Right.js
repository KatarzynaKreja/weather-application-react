import React from "react";
import "./Right.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Right() {
  return (
    <div className="Right">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              <span id="temp"> 18</span>
              <span id="celsius-link" className="active">
                ºC
              </span>
              | <span id="fahrenheit-link">ºF</span>
              <li id="humidity">88%</li>
              <li id="wind">2 km/h</li>
              <li id="description">Clear sky</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
