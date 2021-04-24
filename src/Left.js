import React from "react";
import "./Left.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Left(props) {
  return (
    <div className="col">
      <div className="city">
        {" "}
        <h1> {props.data.city} </h1>
      </div>
      <div className="timeDate">
        <h3> Saturday 18:30 </h3>
      </div>
      <div className="bottomSection">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="clear sky"
          className="weather-image"
        />
      </div>
    </div>
  );
}
