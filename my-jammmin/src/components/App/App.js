import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Holds filtered search results
  const [playlist, setPlaylist] = useState([]); // Holds tracks added to the playlist

  const allTracks = [
    { name: 'Video Games', artist: 'Lana Del Rey', album: 'Born to Die' },
    { name: 'Summertime Sadness', artist: 'Lana Del Rey', album: 'Born to Die' },
    { name: 'Young and Beautiful', artist: 'Lana Del Rey', album: 'Born to Die' },
    { name: 'Love', artist: 'Lana Del Rey', album: 'Lust for Life' },
    { name: 'West Coast', artist: 'Lana Del Rey', album: 'Ultraviolence' },
    { name: 'Sad Girl', artist: 'Lana Del Rey', album: 'Norman Fucking Rockwell' },
    { name: 'Float On', artist: 'Modest Mouse', album: 'Good News for People Who Love Bad News' },
    { name: 'Dashboard', artist: 'Modest Mouse', album: 'We Were Dead Before the Ship Even Sank' },
    { name: 'Ocean Breathes Salty', artist: 'Modest Mouse', album: 'Good News for People Who Love Bad News' },
    { name: 'Missed the Boat', artist: 'Modest Mouse', album: 'We Were Dead Before the Ship Even Sank' },
    { name: 'The World at Large', artist: 'Modest Mouse', album: 'Good News for People Who Love Bad News' },
    { name: 'Neverending Math Equation', artist: 'Modest Mouse', album: 'The Lonesome Crowded West' },
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    const filteredTracks = allTracks.filter(track =>
      track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredTracks); // Update search results
  };

  const handleAddToPlaylist = (track) => {
    // Prevent duplicates
    if (!playlist.some((t) => t.name === track.name)) {
      setPlaylist([...playlist, track]);
    }
  };

  const handleRemoveFromPlaylist = (track) => {
    setPlaylist(playlist.filter((t) => t.name !== track.name));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Application</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
        <div className="containers">
          <SearchResults searchTerm={searchTerm} searchResults={searchResults} handleAddToPlaylist={handleAddToPlaylist} />
          <Playlist playlist={playlist} handleRemoveFromPlaylist={handleRemoveFromPlaylist} />
        </div>
      </header>
    </div>
  );
}

export default App;
