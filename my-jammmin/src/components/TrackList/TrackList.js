import React from 'react';
import Track from '../Track/Track';  

function TrackList({ tracks }) {
  return (
    <div className="tracklist">
      {tracks.map((track, index) => (
        <Track key={index} trackName={track.name} artistName={track.artist} />
      ))}
    </div>
  );
}

export default TrackList;
