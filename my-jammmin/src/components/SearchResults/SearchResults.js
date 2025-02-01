import React from 'react';

function SearchResults({ searchTerm }) {
  return (
    <div className="results-container">
      <h2>Results</h2>
      <p>Display results for: {searchTerm}</p>
    </div>
  );
}

export default SearchResults;
