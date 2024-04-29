import React, { useState, useEffect } from "react";
import "./Weather.css";

const Weather = (props) => {
  const { weatherData, city, error } = props;
  const [temp, setTemp] = useState(null);
  const [unit, setUnit] = useState("°C");
  const date = new Date(weatherData?.location.localtime);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[date.getDay()];

  useEffect(() => {
    if (weatherData) {
      setTemp(weatherData.current.temp_c);
    }
  }, [weatherData]);

  const handleUnitToggle = () => {
    if (unit === "°C") {
      setUnit("°F");
      setTemp(weatherData.current.temp_f);
    } else {
      setUnit("°C");
      setTemp(weatherData.current.temp_c);
    }
  };

  return (
    <>
      {!weatherData && error && (
        <div className="error">
          <h1>Error: {error.statusCode}</h1>
          <p>{error.message}</p>
        </div>
      )}
      {weatherData && (
        <>
          <div className="center">
            <img
              className="icon"
              src={weatherData.current.condition.icon}
              alt="Weather Icon"
            />
            <p className="temp" onClick={handleUnitToggle}>
              {temp} <span className="cf"> {unit}</span>
            </p>
            <p className="temp">{weatherData.location.name}</p>
          </div>
        </>
      )}
      {weatherData && (
        <div className="bottom">
          <div className="left">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/fog.png"
              alt=""
            />
            <div className="desc">
              <p className="des">Humidity: {weatherData.current.humidity}%</p>
              <p className="des">Wind: {weatherData.current.wind_kph}kph</p>
            </div>
          </div>
          <div className="right">
            <h3 className="loc">Weather</h3>
            <p className="loc">{weatherData.current.condition.text}</p>
            <p className="loc">{weatherData.location.localtime}</p>
            <p className="loc">{dayName}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
