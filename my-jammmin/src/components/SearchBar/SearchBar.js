import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading
    handleSearch(); // Trigger the search and log tracks
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleInputChange} 
        placeholder="Search for tracks..."
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;
