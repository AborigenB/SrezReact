import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Поиск по названию"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 ml-2">Поиск</button>
    </div>
  );
};

export default SearchFilter;