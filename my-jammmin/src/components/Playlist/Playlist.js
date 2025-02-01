import React from 'react';
import './Playlist.css'; // Import the styles

function Playlist({ playlist, handleRemoveFromPlaylist }) {
  return (
    <div className="playlist-container">
      <h2>Playlist</h2>
      <div className="playlist-list">
        {playlist.map((track, index) => (
          <div key={index} className="playlist-item">
            <div className="track-info">
              <h3>{track.name}</h3>
              <p>
                <span className="artist">Artist: </span>{track.artist}
              </p>
              <p>
                <span className="album">Album: </span>{track.album}
              </p>
            </div>
            <button 
              className="remove-from-playlist-btn" 
              onClick={() => handleRemoveFromPlaylist(track)}
            >
              ➖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
