import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours > 12) {
    hours = hours % 12;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes > 60) {
    minutes = minutes % 60;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = props.date.getFullYear();

  return (
    <div>
      {day} {hours}:{minutes}
      <br></br>
      {year}
    </div>
  );
}
