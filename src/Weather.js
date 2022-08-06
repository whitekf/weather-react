import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Search from "./Search";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     searched();
  //   }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  //   function searched() {
  // const apiKey = `cfb59eb36c77de781466cc12dfc585a8`;
  // let units = "imperial";
  // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
  // axios.get(apiUrl).then(handleResponse);
  //   }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Weather">
          <div className="centerBox">
            <div className="row">
              <div className="col-sm-7 align-self-center">
                <h1 className="mainHeading">Weather, anywhere.</h1>
              </div>
              <div className="col-sm-5 align-self-center">
                <h3 className="dateAndTime">
                  <ul>
                    <li>
                      <FormattedDate date={weatherData.date} />
                    </li>
                    <li>{weatherData.date.getDate()}</li>
                    <li>
                      {weatherData.date.getDay()} {weatherData.date.getTime()}
                    </li>
                  </ul>
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <button className="currentButton">Current Location</button>
              </div>
              <div className="col-6">
                <div className="searchForm">
                  <form>
                    {/* <form onSubmit={handleSubmit}> */}
                    <input
                      className="search-text-input"
                      type="search"
                      placeholder="Enter a city"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                    <input
                      className="inputButton"
                      type="submit"
                      value="Search"
                    />
                  </form>
                </div>
                <Search />
              </div>
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
              <div className="col-sm-7 align-self-center">
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
                      <span className="currentWind">
                        {" "}
                        {weatherData.wind}mph{" "}
                      </span>
                      <span className="currentWindUnits"> </span>
                    </li>
                  </ul>
                  <div className="align-self-center curWeatherIcon">
                    <img
                      src={weatherData.icon}
                      alt={weatherData.description}
                      width="102"
                    />
                  </div>
                </h3>
              </div>
              <div className="col-sm-4 cityBox align-self-center">
                <h4 className="city"> {weatherData.city} </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // searched();
    const apiKey = `cfb59eb36c77de781466cc12dfc585a8`;
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
