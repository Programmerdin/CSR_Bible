import React from 'react';
import SearchBar from '../components/SearchBar';
import BackButton from '../components/BackButton';
import SearchResults from '../components/SearchResults';
import { useAtom } from 'jotai';
import { queryAtom } from '../atoms/searchAtom';

const SearchView = () => {

  return (
    <div>
      <div className='grid grid-cols-[60px,1fr] grid-rows-1 gap-0 pt-3 pb-1.5 pr-4 border-b-2'>
        <div className='flex justify-center'>
          <BackButton />
        </div>
        <SearchBar />
      </div>
      <SearchResults />
    </div>

  );
};

export default SearchView;
