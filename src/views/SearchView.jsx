import React from 'react';
import SearchBar from '../components/SearchBar';
import BackButton from '../components/BackButton';
import SearchResults from '../components/SearchResults';
import { useAtom } from 'jotai';
import { queryAtom } from '../atoms/searchAtom';
import { TellerDashboardJsx } from '../components/teller-dashboard';

const SearchView = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      <TellerDashboardJsx />
    </div>
  );
};

export default SearchView;
