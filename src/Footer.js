import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
  return (
    <div className="git">
      <a
        href="https://github.com/KatarzynaKreja/weather-application-react"
        target="__blank"
      >
        Open-source code
      </a>{" "}
      by{" "}
      <a
        href="https://www.linkedin.com/in/katarzyna-kreja-03a30b198/"
        target="__blank"
      >
        Katarzyna Kreja
      </a>
    </div>
  );
}
