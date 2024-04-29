import React, { useState, useEffect } from "react";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Rawalpindi");
  const [error, setError] = useState(null);

  useEffect(() => {
    handleClick("Rawalpindi");
  }, []);

  const handleClick = async (city) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=e97015c147584cccaeb132640241904&q=${city}`
      );
      if (!response.ok) {
        const err = await response.json();
        setWeatherData(null);
        setError({
          message: err.error.message,
          statusCode: err.error.code || "Error",
        });
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();

      if (data) {
        setWeatherData(data);
        setError(null);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      <BackgroundVideo />
      <div className="container">
        <Search city={city} setCity={setCity} handleClick={handleClick} />
        <Weather weatherData={weatherData} city={city} error={error} />
      </div>
    </>
  );
};

export default App;
