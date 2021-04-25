import React from "react";
import "./Right.css";
import "bootstrap/dist/css/bootstrap.css";
import Temperature from "./Temperature";

export default function Right(props) {
  return (
    <div className="Right">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              <span id="temp">
                {" "}
                <Temperature celsius={props.data.temperature} />{" "}
              </span>
              <li id="humidity">Humidity: {props.data.humidity} %</li>
              <li id="wind">Wind: {props.data.wind} km/h</li>
              <li id="description">{props.data.description}</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
