import React from "react";
import Weather from "./Weather";
import Weatherk from "./Weatherk";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  let city = "Madrid";
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Hello from Kassie!</h1>
          <Weatherk />
          <Weather city={city} />
          <button className="btn btn-primary w-100">Hi</button>
          <br />
        </header>
      </div>
    </div>
  );
}

export default App;
