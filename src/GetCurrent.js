import React from "react";
import axios from "axios";
import "./Weather.css";
import WeatherConversion from "./WeatherConversion";
import WeatherIcon from "./WeatherIcon";

export default function GetCurrent(props) {
  const apiKey = `15ed5d92f7b4157fdab57b1053c46052`;
  let units = props.info.units; //Can I do this???
  // let current = props.info;

  
  // function used when user clicks "Current Location" button to show city/temp
  function searchCurrentCity(props) {
    let apiKey = "15ed5d92f7b4157fdab57b1053c46052";
    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${props.coords.latitude}&lon=${props.coords.longitude}&appid=${apiKey}&units=${units}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(goReturn());
    console.log("in searchCurrentCity");
  }

  function showPosition(props) {
    let latitude = props.coords.latitude;
    let longitude = props.coords.longitude;
    let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
    let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    // axios.get(`${apiUrl}&appid=${apiKey}`).then(<WeatherDisplayed />);
    axios.get(`${apiUrl}`).then(goReturn);
    navigator.geolocation.getCurrentPosition(searchCurrentCity);
    console.log("in showPostion");
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log("in getCurrentPostion");
  }

  function goReturn() {
    <div></div>;
  }

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
