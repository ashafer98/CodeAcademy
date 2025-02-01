import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playlist, setPlaylist] = useState([
    { name: 'Track 1', artist: 'Artist 1' },
    { name: 'Track 2', artist: 'Artist 2' },
    { name: 'Track 3', artist: 'Artist 3' },
  ]);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // You can perform any search logic here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Application</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
        <div className="containers">
          <SearchResults searchTerm={searchTerm} />
          <Playlist playlist={playlist} />
        </div>
      </header>
    </div>
  );
}

export default App;
