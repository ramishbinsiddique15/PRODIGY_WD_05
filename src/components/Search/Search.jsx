// Search.js
import React, { useState } from 'react';
import './Search.css';

const Search = (props) => {
  const [inputCity, setInputCity] = useState(''); // State to store input value

  const handleInputChange = (event) => {
    setInputCity(event.target.value); // Update inputCity state on input change
  };

  const handleSearchClick = () => {
    props.setCity(inputCity); // Update city state with inputCity when the button is clicked
    props.handleClick(); // Trigger fetching weather data
  };

  return (
    <div className='search'>
      <input
        className='input'
        type="text"
        name="city"
        value={inputCity} // Use inputCity state
        onChange={handleInputChange} // Update inputCity state on input change
        placeholder='Enter a city'
      />
      <button className="button" onClick={handleSearchClick}>Search</button> {/* Update city and fetch weather data */}
    </div>
  );
};

export default Search;
