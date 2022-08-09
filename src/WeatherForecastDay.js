import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="forecastDay">{day()}</div>{" "}
      <div>
        <WeatherIcon size={36} code={props.data.weather[0].icon} />
      </div>
      <span className="forecastTempMax">
        {Math.round(props.data.temp.max)}°
      </span>{" "}
      {" | "}
      <span className="forecastTempMin">
        {Math.round(props.data.temp.min)}°
      </span>
    </div>
  );
}
