import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Madrid" />

        <footer className="foot align-self-center">
          Designed and Coded by
          <a href="https://kassiewhite.netlify.app/index.html">Kassie White</a>.
          {"  "}
          <a
            href="https://github.com/whitekf/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Code
          </a>
          . Hosted on netlify. 2022
        </footer>
      </header>
    </div>
  );
}

export default App;
