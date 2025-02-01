import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'; // Import SearchResults
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playlist, setPlaylist] = useState([]); // Empty playlist until search is done
  const [allTracks] = useState([
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
  ]);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Filter tracks based on the search term (you can adjust this to your needs)
    const filteredTracks = allTracks.filter(track =>
      track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPlaylist(filteredTracks); // Update playlist with search results
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Application</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
        <div className="containers">
          <SearchResults searchTerm={searchTerm} playlist={playlist} /> {/* Pass playlist */}
          <Playlist playlist={playlist} />
        </div>
      </header>
    </div>
  );
}

export default App;
