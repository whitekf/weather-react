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
  let ampm = "am";
  if (hours > 12) {
    ampm = "pm";
  }
  if (hours > 12) {
    hours = hours % 12;
  }
  if (hours > 1) {
    hours = 1;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decemeber",
  ];
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let dateNum = props.date.getDate();

  return (
    <div>
      {day} {hours}:{minutes}
      {ampm}
      <br></br>
      {month} {dateNum}, {year}
    </div>
  );
}
