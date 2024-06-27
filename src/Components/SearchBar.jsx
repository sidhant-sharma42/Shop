import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="p-2 w-96 border border-gray-300 rounded"
      placeholder="Search..."
    />
  );
};

export default SearchBar;
