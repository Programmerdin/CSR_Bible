import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import { currentProcedureAtom } from '../atoms/procedureAtom';
import { queryAtom, searchResultsAtom } from '../atoms/searchAtom';

const SearchResults = () => {
  const [query, setQuery] = useAtom(queryAtom);
  const [searchResults, setSearchResults] = useAtom(searchResultsAtom);

  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useAtom(lastViewAtom);
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);

  const handleSearchResultsClick = (searchResults) => {
    setLastView(currentView);
    setCurrentProcedure(searchResults.procedureNumber);
    setCurrentView('procedure');
  };

  return (
    <div className=''>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((searchResults, index) => (
            <li 
              key={index}
              onClick={() => handleSearchResultsClick(searchResults)}
              className='text-base py-3 pl-4 hover:bg-[#f6f6f6] active:bg-[#f6f6f6] cursor-pointer'
            >
              {searchResults.procedureName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;