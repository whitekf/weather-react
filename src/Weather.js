import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  let city = "Tokyo";
  function handleResponse(response) {
    alert(
      `The weather in -our city- --> ${response.data.name} is ${response.data.main.temp} degrees C`
    );
  }

  let apiKey = "15ed5d92f7b4157fdab57b1053c46052";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    (<h2>Hello from my Weather file! {city} </h2>),
    (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    )
  );
}
