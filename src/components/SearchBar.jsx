import React, { useState } from 'react';
import './SearchBar.css';
import searchIcon from '../assets/icons/searchGray.png';
import Fuse from 'fuse.js';
import procedureList from '../transaction_procedures/procedureList.json';

import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import { currentProcedureAtom } from '../atoms/procedureAtom';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useAtom(lastViewAtom);
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);

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
    setLastView(currentView);
    setCurrentProcedure(searchResults.procedureNumber);
    setCurrentView('procedure');
  };


  return (
    <div className='SearchBarDiv'>
      <img src={searchIcon} alt="Search Icon" className="search-icon" />
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className='search-bar-input'
        placeholder="Search..."
      >
        
      </input>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((searchResults, index) => (
            <li 
              key={index} 
              onClick={() => handleSearchResultsClick(searchResults)}
              className='search-results-list-item'
            >
              {searchResults.procedureName}
            </li>
          ))}
        </ul>
      )}


    </div>
  );
};

export default SearchBar;
