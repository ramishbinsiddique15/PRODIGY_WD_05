import React, { useState } from 'react';
import './Search.css';

const Search = (props) => {
  const [inputCity, setInputCity] = useState(''); 

  
  const handleInputChange = (event) => {
    setInputCity(event.target.value); 
  };

  const handleSearchClick = () => {
    props.handleClick(inputCity);
    props.setCity(inputCity); 
  };

  return (
    <div className='search'>
      <input
        className='input'
        type="text"
        name="city"
        value={inputCity}
        onChange={handleInputChange} 
        placeholder='Enter a city'
      />
      <button className="button" onClick={handleSearchClick}>Search</button> 
    </div>
  );
};

export default Search;
