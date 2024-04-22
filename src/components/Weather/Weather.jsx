// Weather.js
import React, { useState, useEffect } from "react";
import "./Weather.css";

const Weather = (props) => {
  const { weatherData, city } = props;

  // Initialize state for temperature and unit
  const [temp, setTemp] = useState(null); // Initialize with null
  const [unit, setUnit] = useState("°C"); // Initialize with Celsius unit
  const date = new Date(weatherData.location.localtime); // Replace with your date
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[date.getDay()]; // Returns the name of the day
  // Update temperature when weatherData changes
  useEffect(() => {
    if (weatherData) {
      setTemp(weatherData.current.temp_c); // Assuming temperature is initially in Celsius
    }
  }, [weatherData]);

  // Function to handle unit toggle (between Celsius and Fahrenheit)
  const handleUnitToggle = () => {
    if (unit === "°C") {
      setUnit("°F");
      setTemp(weatherData.current.temp_f); // Update temperature to Fahrenheit
    } else {
      setUnit("°C");
      setTemp(weatherData.current.temp_c); // Update temperature to Celsius
    }
  };

  return (
    <>
      <div className="weather">
        {weatherData && (
          <>
            <img
              className="icon"
              src={weatherData.current.condition.icon}
              alt="Weather Icon"
            />
            <p className="temp" onClick={handleUnitToggle}>
              {temp} <span className="cf"> {unit}</span>
            </p>
            <p className="temp">{weatherData.location.name}</p>
          </>
        )}
      </div>
      {weatherData && (
        <div className="bottom">
          <div className="left">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/fog.png"
              alt=""
            />
            <div className="desc">
              <p className="des">Humidty: {weatherData.current.humidity}%</p>
              <p className="des">Wind: {weatherData.current.wind_kph}kph</p>
            </div>
          </div>
          <div className="right">
            <h3 className="loc">Weather</h3>
            <p className="loc">{weatherData.location.name}</p>
            <p className="loc">{weatherData.location.localtime}</p>
            <p className="loc">{dayName}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
