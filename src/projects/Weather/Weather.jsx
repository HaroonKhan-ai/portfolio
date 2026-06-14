import { useState } from "react";
import "./weather.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (city.trim() === "") {
      setError("Enter city name");
      return;
    }

    setWeather(null);
    setError("");
    setLoading(true);

    try {
      let api_key = "c05aa2d919d2eb42f54fcac5b68a8df4";

      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      );

      let data = await res.json();

      if (res.status !== 200) {
        throw new Error(data.message);
      }

      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // always stop loading
    }
  };

  return (
    <div className="weatherContainer">
      <h1>Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].main}</p>
          <p> Temp: {weather.main.temp}°C</p>
          <p> Humidity: {weather.main.humidity}%</p>
          <p> Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;