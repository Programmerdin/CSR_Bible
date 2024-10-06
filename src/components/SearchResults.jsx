import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
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

  const [highlightedIndex, setHighlightedIndex] = useState(-1); // State for tracking highlighted index
  const [isHistoryMode, setIsHistoryMode] = useState(true); // State to track whether we're in history or search results mode

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
    }
  }, [setRecentVisitHistory, procedureList]);

  const handleSearchResultsClick = (item) => {
    // Handle both search results and history items
    const procedureNumber = item.procedureNumber || item; // item could be a procedure object or just a procedure number from history
    const procedure = procedureList.find(proc => proc.procedureNumber === procedureNumber);

    if (!procedure) return; // If no valid procedure, do nothing

    setQuery('');
    setLastView(currentView);
    setCurrentProcedure(procedureNumber);
    setCurrentView('procedure');

    // Check if the procedureNumber is valid and not the same as the last item
    if (procedureNumber && 
        (!recentVisitHistory.length || procedureNumber !== recentVisitHistory[recentVisitHistory.length - 1]?.procedureNumber)) {
      
      // Create an updated history by combining the existing history with the new entry
      const updatedHistory = [...recentVisitHistory.map(proc => proc.procedureNumber), procedureNumber];

      // Limit history to the last 200 entries if it exceeds 200
      const limitedHistory = updatedHistory.length > 200 ? updatedHistory.slice(-200) : updatedHistory;

      // Update state and local storage
      setRecentVisitHistory(limitedHistory);
      localStorage.setItem('recentVisitHistory', JSON.stringify(limitedHistory));
    }
  };

  // Reset highlighted index when the query changes
  useEffect(() => {
    setHighlightedIndex(-1);
    setIsHistoryMode(query === ''); // If query is empty, we're in history mode
  }, [query]);

  // Keydown event listener to navigate both search results and visit history
  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentList = isHistoryMode ? recentVisitHistory.slice(-10).reverse() : searchResults; // Use reversed list for rendering
      if (currentList.length === 0) return;
  
      if (e.key === 'ArrowDown') {
        e.preventDefault(); // Prevent cursor movement in the input
        setHighlightedIndex((prevIndex) => 
          (prevIndex + 1) % currentList.length
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault(); // Prevent cursor movement in the input
        setHighlightedIndex((prevIndex) => 
          (prevIndex - 1 + currentList.length) % currentList.length
        );
      } else if (e.key === 'Enter' && highlightedIndex !== -1) {
        e.preventDefault(); // Prevent submitting or other default behavior
        const selectedItem = currentList[highlightedIndex];
        handleSearchResultsClick(selectedItem);
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [highlightedIndex, searchResults, recentVisitHistory, isHistoryMode]);

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
                className={`flex items-center text-base text-gray-500 py-3 pl-4 hover:bg-[#f6f6f6] active:bg-[#f6f6f6] cursor-pointer ${highlightedIndex === index && isHistoryMode ? 'bg-[#f6f6f6]' : ''}`}
              > 
                <img src={historyIcon} className="w-6 mr-2 opacity-50" />
                {visitHistory.procedureName}
              </li>
            ))
          }
        </ul>
      }

      {searchResults && searchResults.length > 0 && query !== '' && (
        <ul>
          {searchResults.map((searchResult, index) => (
            <li
              key={index}
              onClick={() => handleSearchResultsClick(searchResult)}
              className={`text-base py-3 pl-4 hover:bg-[#f6f6f6] active:bg-[#f6f6f6] cursor-pointer ${highlightedIndex === index && !isHistoryMode ? 'bg-[#f6f6f6]' : ''}`}
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
