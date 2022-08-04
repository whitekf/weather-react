import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const [searched, setSearched] = useState(" ");

  function handleSearched(event) {
    event.preventDefault();
    if (searched.length > 0) {
      setSearched(event.target.value);
      setSearched(`It is currently 30°F in ${city}`);
    } else {
      alert("Please enter a city");
    }
  }

  function updateSearched(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSearched}>
      <input
        type="search"
        placeholder="Enter a city"
        onChange={updateSearched}
      />
      <input type="submit" value="Search" />
      <h5>{searched}</h5>
    </form>
  );
}
