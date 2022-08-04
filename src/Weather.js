import React from "react";
import axios from "axios";
import "./Weather.css";
import Search from "./Search";
import { Audio } from "react-loader-spinner";
import { Rings } from "react-loader-spinner";
import { TailSpin } from "react-loader-spinner";
import { ThreeDots } from "react-loader-spinner";
import { BallTriangle } from "react-loader-spinner";
import { Hearts } from "react-loader-spinner";
import { Oval } from "react-loader-spinner";
import { Grid } from "react-loader-spinner";

export default function Weather(props) {
  let weatherData = {
    city: "New York",
    date: "July 28, 2022",
    day: "Thursday",
    time: "3:54pm",
    description: "Cloudy",
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
    temperature: 72,
  };

  let city = "Tokyo";
  function handleResponse(response) {
    let message = `The weather in -our city- --> ${response.data.name} is ${response.data.main.temp} degrees C`;
  }

  let apiKey = "15ed5d92f7b4157fdab57b1053c46052";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h2>Hello from my Weather file! {city} </h2>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="blueviolet"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
      <div className="Weather">
        <div className="centerBox">
          <div className="row">
            <div className="col-8 align-self-center">
              <h1 className="mainHeading">Weather, anywhere.</h1>
            </div>
            <div className="col-4 align-self-center">
              <h3 className="dateAndTime">
                <ul>
                  <li>{weatherData.date}</li>
                  <li>{weatherData.day}</li>
                  <li>{weatherData.time}</li>
                </ul>
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <button className="currentButton">Current Location</button>
            </div>
            <div className="col-5">
              <Search className="inputButton" />
            </div>
            <div className="col-2"></div>
            <div className="col-2">
              <button className="CorF">°C or [°F]</button>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <div className="today">Today:</div>
            </div>
            <div className="col-8"></div>
          </div>

          <div className="row">
            <div className="col-7 align-self-center">
              <h3 className="current">
                <ul>
                  <li>
                    Current:
                    <span className="currentTemp">
                      {" "}
                      {weatherData.temperature}{" "}
                    </span>
                    <span className="CorFLetter">°F </span>
                    <br />
                    <span className="currentDescription align-self-center">
                      {weatherData.description}
                    </span>
                  </li>
                  <li>
                    Humidity:
                    <span className="currentHumidity">
                      {" "}
                      {weatherData.humidity}%{" "}
                    </span>
                  </li>
                  <li>
                    Wind:
                    <span className="currentWind"> {weatherData.wind}mph </span>
                    <span className="currentWindUnits"> </span>
                  </li>
                </ul>
                <div className="align-self-center curWeatherIcon">
                  <img
                    src={weatherData.imgURL}
                    alt={weatherData.description}
                    width="102"
                  />
                </div>
              </h3>
            </div>
            <div className="col-4 cityBox align-self-center">
              <h4 className="city"> {weatherData.city} </h4>
            </div>
          </div>

          <footer className="foot align-self-center">
            Designed and Coded by Kassie White:
            <a href="https://github.com/whitekf/weather-react" target="_blank">
              Open Source Code
            </a>
            . Hosted on netlify. 2022
          </footer>
        </div>
        <div className="row">
          <h3 className="col-1">
            <Hearts color="pink" height={80} width={80} />
            <BallTriangle color="white" height={80} width={80} />
            <Rings color="#00BFFF" height={80} width={80} />
            <TailSpin color="lightblue" height={80} width={80} />
          </h3>
        </div>
      </div>
    </div>
  );
}
