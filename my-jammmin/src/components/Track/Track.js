import React from 'react';

function Track({ trackName, artistName }) {
  return (
    <div className="track">
      <h3>{trackName}</h3>
      <p>{artistName}</p>
    </div>
  );
}

export default Track;
