import React from 'react';
import SearchBar from '../components/SearchBar';

const HomeView = ({ suggestions, onBankDraftButtonClick }) => {
  return (
    <div>
      <h1>Home View</h1>
      <SearchBar suggestions={suggestions} />
      <h3>Recent</h3>
      <button onClick={onBankDraftButtonClick}>Bank Draft</button>
    </div>
  );
};

export default HomeView;
