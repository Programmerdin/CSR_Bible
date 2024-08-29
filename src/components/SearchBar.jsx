import searchIcon from '../assets/icons/searchGray.png';
import Fuse from 'fuse.js';
import procedureList from '../transaction_procedures/procedureList.json';

import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import { currentProcedureAtom } from '../atoms/procedureAtom';
import { queryAtom, searchResultsAtom } from '../atoms/searchAtom';

const SearchBar = () => {
  const [query, setQuery] = useAtom(queryAtom);
  const [searchResults, setSearchResults] = useAtom(searchResultsAtom);

  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useAtom(lastViewAtom);
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);

  const fuse = new Fuse(procedureList, {
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


  return (
    <div className=''>
      <img src={searchIcon} className="absolute pt-2 ml-3.5 w-6 opacity-60" />
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className='py-2 pl-12 rounded-2xl bg-opacity-85 bg-[#76768026] text-base text-black w-full outline-none'
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
