import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // You can perform any search logic here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Application</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
        <div className="containers">
          <div className="results-container">
            <h2>Results</h2>
            <p>Display search results here</p>
          </div>
          <div className="playlist-container">
            <h2>Playlist</h2>
            <p>Display playlist here</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
