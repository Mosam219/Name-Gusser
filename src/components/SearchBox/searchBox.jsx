import React from 'react';
import './searchBox.css';

const SearchBox = ({ handleInputChange }) => {
    return (
        <div className="search-container">
            <input onChange={(event) => handleInputChange(event.target.value)} placeholder="type keywords" className="searchInput"></input>
        </div>
    );
};
export default SearchBox;