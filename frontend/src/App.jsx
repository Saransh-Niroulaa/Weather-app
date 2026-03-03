import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [view, setView] = useState("home"); // 'home' or 'weather'
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`http://localhost:3000/weather?city=${city}`);
      if (!response.ok) throw new Error("Location not found");
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => setView("home")}>
          Weather.
        </div>
        <div className="nav-links">
          <button onClick={() => setView("home")}>Home</button>
          <button onClick={() => setView("weather")}>Search</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {view === "home" && (
          <section className="home-section">
            <h1>Stay ahead of the weather.</h1>
            <p>Simple, accurate, and minimalist weather forecasts for any location in the world.</p>
            <button className="btn-primary" onClick={() => setView("weather")}>
              Get Started
            </button>
          </section>
        )}

        {view === "weather" && (
          <section className="weather-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Enter city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
              />
              <button className="btn-primary" onClick={fetchWeather}>
                Search
              </button>
            </div>

            {loading && <p className="condition-text">Locating...</p>}
            {error && <p className="condition-text" style={{color: '#d63031'}}>Error: {error}</p>}

            {weather && !loading && (
              <div className="weather-display">
                <h2 className="city-name">{weather.location.name}</h2>
                <div className="condition-text">{weather.current.condition.text}</div>
                
                <div className="temp-large">
                  {Math.round(weather.current.temp_c)}°
                </div>

                <div className="weather-meta">
                  <div className="meta-item">
                    <span className="meta-label">Wind</span>
                    <span className="meta-value">{weather.current.wind_kph} km/h</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Humidity</span>
                    <span className="meta-value">{weather.current.humidity}%</span>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div>Thanks for visiting!</div>
      </footer>
    </div>
  );
};

export default App;
