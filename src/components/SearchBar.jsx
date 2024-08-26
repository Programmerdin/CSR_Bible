import React, { useState } from 'react';
import './SearchBar.css';
import Fuse from 'fuse.js';
import procedureList from '../transaction_procedures/procedureList.json';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fuse = new Fuse(procedureList,{
    keys: [ 
      'procedureNumber',
      'procedureName',
      'tags'
    ],
  });

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    const results = fuse.search(e.target.value);
    setSearchResults(results.map(result => result.item));
  };

  const handleSearchResultsClick = (searchResults) => {
    console.log(searchResults);
  };


  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className='search-bar-input'
        placeholder="Search..."
      />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((searchResults, index) => (
            <li key={index} onClick={() => handleSearchResultsClick(searchResults)}>
              {searchResults.procedureName}
            </li>
          ))}
        </ul>
      )}


    </div>
  );
};

export default SearchBar;
