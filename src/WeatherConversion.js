import React, { useState } from "react";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("imperial");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "imperial") {
    return (
      <div className="WeatherConversion">
        {" "}
        <span className="currentTemp"> {Math.round(props.fTemp)} </span>
        <span className="CorFLetter">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
        </span>
        <li>
          Wind:
          <span className="currentWind"> {props.theWind}mph </span>
          <span className="currentWindUnits"> </span>
        </li>
      </div>
    );
  } else {
    let celsius = (props.fTemp - 32) * (5 / 9);
    let kmHr = props.theWind * 1.609344;
    return (
      <div className="WeatherConversion">
        {" "}
        <span className="currentTemp"> {Math.round(celsius)} </span>
        <span className="CorFLetter">
          <a href="/">°F</a> | °C{" "}
        </span>
        <ul>
          <div>
            Wind:
            <span className="currentWind">
              {" "}
              {Math.round(kmHr)}
              {"kph"}{" "}
            </span>
            <span className="currentWindUnits"> </span>
          </div>
        </ul>
      </div>
    );
  }
}
