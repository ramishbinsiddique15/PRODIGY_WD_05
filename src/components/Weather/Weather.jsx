// Weather.js
import React, { useState, useEffect } from "react";
import "./Weather.css";

const Weather = (props) => {
  const { weatherData, city } = props;

  // Initialize state for temperature and unit
  const [temp, setTemp] = useState(null); // Initialize with null
  const [unit, setUnit] = useState("°C"); // Initialize with Celsius unit

  // Update temperature when weatherData changes
  useEffect(() => {
    if (weatherData) {
      setTemp(weatherData.temp_c); // Assuming temperature is initially in Celsius
    }
  }, [weatherData]);

  // Function to handle unit toggle (between Celsius and Fahrenheit)
  const handleUnitToggle = () => {
    if (unit === "°C") {
      setUnit("°F");
      setTemp(weatherData.temp_f); // Update temperature to Fahrenheit
    } else {
      setUnit("°C");
      setTemp(weatherData.temp_c); // Update temperature to Celsius
    }
  };

  return (
    <>
    <div className="weather">
      {weatherData && (
        <>
          <img
            className="icon"
            src={weatherData.condition.icon}
            alt="Weather Icon"
          />
          <p className="temp" onClick={handleUnitToggle}>
            {temp} {unit}
          </p>
          <p className="temp">{city}</p> {/* Display city */}
        </>
      )}
    </div>
      {weatherData && (
        <div className="bottom">
          <div className="left"><img src="https://ssl.gstatic.com/onebox/weather/64/fog.png" alt="" />
          <div className="desc">
            <p className="des">Humidty: {weatherData.humidity}%</p>
            <p className="des">Wind: {weatherData.wind_kph}kph</p>
          </div>
          </div>
          <div className="right">
            <h3>Weather</h3>
            {/* <p>{weatherData.current.location.name}</p> */}
            </div>
        </div>
      )}
      </>
  );
};

export default Weather;
