import React from 'react';
import './SearchResults.css';

function SearchResults({ searchTerm, searchResults, handleAddToPlaylist }) {
  return (
    <div className="results-container">
      <h2>Results</h2>
      <p>Displaying results for: <strong>{searchTerm}</strong></p>

      <div className="results-list">
        {searchResults.map((track, index) => (
          <div key={index} className="results-item">
            <div className="track-info">
              <h3>{track.name}</h3>
              <p><span className="artist">Artist: </span>{track.artist}</p>
              <p><span className="album">Album: </span>{track.album}</p>
            </div>
            <button 
              className="add-to-playlist-btn" 
              onClick={() => handleAddToPlaylist(track)}
            >
              Add to Playlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
