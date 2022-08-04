import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import { Rings } from "react-loader-spinner";
import { TailSpin } from "react-loader-spinner";
import { ThreeDots } from "react-loader-spinner";
import { BallTriangle } from "react-loader-spinner";
import { Hearts } from "react-loader-spinner";
import { Oval } from "react-loader-spinner";
import { Grid } from "react-loader-spinner";

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
      <Hearts color="pink" height={80} width={80} />
      <BallTriangle color="white" height={80} width={80} />
      <Rings color="#00BFFF" height={80} width={80} />
      <TailSpin color="red" height={80} width={80} />
      <ThreeDots color="green" height={80} width={80} />
      <Oval color="orange" height={80} width={80} />
      <Grid color="yellow" height={80} width={80} />
    </div>
  );
}
