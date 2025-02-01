import React from 'react';
import TrackList from '../TrackList/TrackList';

function Playlist({ playlist }) {
  return (
    <div className="playlist-container">
      <h2>Playlist</h2>
      <TrackList tracks={playlist} />
    </div>
  );
}

export default Playlist;
