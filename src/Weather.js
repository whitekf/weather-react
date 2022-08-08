import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
// import Search from "./Search";
import FormattedDate from "./FormattedDate";
import WeatherDisplayed from "./WeatherDisplayed";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const units = "imperial";

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      //icon: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
    console.log("in handleResponse ^^^ data");
  }

  function handleSubmit(event) {
    event.preventDefault();
    searched();
    console.log("in handleSubmit");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    console.log("in handleCityChange");
    console.log("city is " + city);
  }

  function searched(event) {
    const apiKey = `15ed5d92f7b4157fdab57b1053c46052`;
    //let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    console.log("in searched");
  }

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
                  <form onSubmit={handleSubmit}>
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
                {/* <Search /> */}
              </div>
              <div className="col-2">
                <button className="CorF">°C or [°F]</button>
              </div>
            </div>

            <WeatherDisplayed data={weatherData} />
            {/* <WeatherDisplayed newCity={city} /> */}
            {/* <WeatherDisplayed aCity={props.defaultCity} /> */}
          </div>
        </div>
      </div>
    );
  } else {
    searched();

    return <h5>"Loading...`;</h5>;
  }
}
