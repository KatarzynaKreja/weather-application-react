import React from "react";
import "./Left.css";
import "bootstrap/dist/css/bootstrap.css";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function Left(props) {
  return (
    <div className="col">
      <div className="city">
        {" "}
        <h1> {props.data.city} </h1>
      </div>
      <div className="timeDate">
        <h3>
          {" "}
          <FormatDate date={props.data.date} />{" "}
        </h3>
      </div>
      <div className="bottomSection">
        <WeatherIcon code={props.data.icon} size={50} />
      </div>
    </div>
  );
}
