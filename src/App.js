import React from "react";

const api = {
  key: "7fd90313ba0928133acb3597d89e8ac7",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  let currentDate = new Date().toLocaleDateString();

  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{currentDate}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15°C</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
