import React from "react";
import Left from "./Left";
import Right from "./Right";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="row">
      <div className="col">
        <Left />{" "}
      </div>
      <div className="col">
        {" "}
        <Right />
      </div>
    </div>
  );
}
