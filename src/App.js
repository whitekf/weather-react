import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  let city = "Madrid";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from Kassie!</h1>
        <Weather city={city} />
        <p>Link to my github weather-react: </p>
        <a href="https://github.com/whitekf/weather-react">
          My GitHub for this site
        </a>
        <br />
      </header>
    </div>
  );
}

export default App;
