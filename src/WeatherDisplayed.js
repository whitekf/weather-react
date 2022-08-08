import React from "react";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";

export default function WeatherDisplayed(props) {
  return (
    <div className="WeatherDisplayed">
      <div className="row">
        <div className="col-4">
          <div className="today">Today:</div>
        </div>
        <div className="col-8"></div>
      </div>

      <div className="row">
        <div className="col-sm-7 align-self-center">
          <h3 className="current">
            <ul>
              <li>
                <WeatherConversion
                  fTemp={props.data.temperature}
                  theWind={props.data.wind}
                />
                {/* Moved into a new component called WeatherConversion  */}
                {/* <span className="currentTemp"> {props.data.temperature} </span>
                <span className="CorFLetter">°F </span> */}
                Currently:{" "}
                <span className="currentDescription align-self-center">
                  {props.data.description}
                </span>
              </li>
              <li>
                Humidity:
                <span className="currentHumidity">
                  {" "}
                  {props.data.humidity}%{" "}
                </span>
              </li>
            </ul>
            <div className="align-self-center curWeatherIcon">
              {/* <div className="float-left"> */}
              <div className="align-center">
                {/* <WeatherIcon code={props.data.icon} /> */}
                {/* <img
                src={props.data.iconUrl}
                alt={props.data.description}
                width="102"
              /> */}
              </div>
            </div>
          </h3>
        </div>

        <div className="col-sm-4 cityBox align-self-center">
          <WeatherIcon code={props.data.icon} />
          <br></br>
          <h4 className="city"> {props.data.city} </h4>
        </div>
      </div>
    </div>
  );
}
