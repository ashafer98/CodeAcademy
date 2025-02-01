import React from 'react';
import TrackList from '../TrackList/TrackList';

function Playlist() {
  return (
    <div className="playlist-container">
      <h2>Playlist</h2>
      {/* <TrackList tracks={playlist} /> */}
      <button>Add To Spotify</button>
      
    </div>
  );
}

export default Playlist;
