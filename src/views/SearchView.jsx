import React from 'react';
import SearchBar from '../components/SearchBar';
import BackButton from '../components/BackButton';

const SearchView = ({ suggestions,onBackButtonClick  }) => {
  return (
    <div>
      <h1>Search View</h1>
      <BackButton onClick={onBackButtonClick}/>
      <SearchBar suggestions={suggestions} />
      <h3>Recent</h3>
      <p>See all</p>
    </div>
  );
};

export default SearchView;
