// App.js
import React, { useState } from 'react';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import Search from './components/Search/Search';
import Weather from './components/Weather/Weather';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const handleClick = async (city) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e97015c147584cccaeb132640241904&q=${city}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      console.log(data)
      if (data) {
        setWeatherData(data);
      } else {
        console.error('No current data found in the response');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  return (
    <>
      <BackgroundVideo />
      <div className="container">
        <Search city={city} setCity={setCity} handleClick={handleClick} />
        <Weather weatherData={weatherData} city={city} /> {/* Pass city to Weather component */}
      </div>
    </>
  );
};

export default App;
