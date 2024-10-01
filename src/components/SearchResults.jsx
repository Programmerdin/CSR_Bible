import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import { currentProcedureAtom } from '../atoms/procedureAtom';
import { queryAtom, searchResultsAtom, recentVisitHistoryAtom } from '../atoms/searchAtom';
import historyIcon from '../assets/icons/history.png';
import procedureList from '../transaction_procedures/procedureList.json';

const SearchResults = () => {
  const [query, setQuery] = useAtom(queryAtom);
  const [searchResults, setSearchResults] = useAtom(searchResultsAtom);
  const [recentVisitHistory, setRecentVisitHistory] = useAtom(recentVisitHistoryAtom);

  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useAtom(lastViewAtom);
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);

  // Load recentVisitHistory from local storage when the component mounts
  useEffect(() => {
    const storedHistory = localStorage.getItem('recentVisitHistory');
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory);
      const filteredHistory = parsedHistory
        .filter(item => item != null) // Filter out null or undefined values
        .map(procNum => procedureList.find(proc => proc.procedureNumber === procNum) || null) // Map to procedure objects
        .filter(proc => proc !== null); // Filter out any nulls

      setRecentVisitHistory(filteredHistory);
      console.log('Loaded history from local storage:', filteredHistory);
    }
  }, [setRecentVisitHistory, procedureList]); // Include procedureList as a dependency if it's defined in the scope

  

  const handleSearchResultsClick = (searchResult) => {
    setLastView(currentView);
    setCurrentProcedure(searchResult.procedureNumber);
    setCurrentView('procedure');

    // Add the new result to the visit history if it's not the same as the last item
    if (searchResult.procedureNumber && searchResult.procedureNumber !== recentVisitHistory[recentVisitHistory.length - 1]) {
      let finalHistory = [...recentVisitHistory, searchResult.procedureNumber];

      // Limit history to the last 100 entries if it exceeds 200
      if (finalHistory.length > 200) {
        finalHistory = finalHistory.slice(finalHistory.length - 100);
      }

      // Update state and local storage
      setRecentVisitHistory(finalHistory);
      localStorage.setItem('recentVisitHistory', JSON.stringify(finalHistory));
    }
  };

  return (
    <div className=''>
      {query === '' && 
        <ul className='text-base text-gray-500'>
          {recentVisitHistory
            .slice(-10) // Get the last 10 items
            .reverse()  // Reverse the order to show the most recent first
            .map((visitHistory, index) => (
              <li 
                key={index}
                onClick={() => handleSearchResultsClick(visitHistory)}
                className='flex items-center text-base text-gray-500 py-3 pl-4 hover:bg-[#f6f6f6] active:bg-[#f6f6f6] cursor-pointer'
              > 
                <img src={historyIcon} className="w-5 mr-3 opacity-50" />
                {visitHistory.procedureName}
              </li>
            ))
          }
        </ul>
      }


      {searchResults && searchResults.length > 0 && (
        <ul>
          {searchResults.map((searchResult, index) => (
            <li
              key={index}
              onClick={() => handleSearchResultsClick(searchResult)}
              className='text-base py-3 pl-4 hover:bg-[#f6f6f6] active:bg-[#f6f6f6] cursor-pointer'
            >
              {searchResult.procedureName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
