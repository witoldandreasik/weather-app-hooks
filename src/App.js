import React, { useState } from "react";

const api = {
  key: "7fd90313ba0928133acb3597d89e8ac7",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  const searchWeather = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  let currentDate = new Date().toLocaleDateString();

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp < 16
            ? "app cold"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={searchWeather}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{currentDate}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
