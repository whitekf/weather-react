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
      </header>
    </div>
  );
}

export default App;
