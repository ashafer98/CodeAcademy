import React from 'react';

function SearchResults({ searchTerm, playlist }) {
  return (
    <div className="results-container">
      <h2>Results</h2>
      <p>Displaying results for: <strong>{searchTerm}</strong></p>
      
      <div className="track-list">
        {playlist.map((track, index) => (
          <div key={index} className="track-item">
            <h3>{track.name}</h3>
            <p>{track.artist}</p>
            <p>{track.album}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
