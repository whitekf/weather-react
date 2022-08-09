import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = `15ed5d92f7b4157fdab57b1053c46052`;
  let longitude = 40.7;
  let latitude = 74;
  let apiUrl = `https://api.openweathermap.org/data.2.5/onecall?lat=${latitude}&lon=${longitude}&appid-${apiKey}`;

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thurs</div>{" "}
          <WeatherIcon size={36} code="01d" />
          <span className="forecastTempMax">19°</span> {" | "}
          <span className="forecastTempMin">7°</span>
        </div>{" "}
      </div>
    </div>
  );
}
