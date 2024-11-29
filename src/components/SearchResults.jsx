import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentProcedureAtom } from '../atoms/procedureAtom';
import { queryAtom, searchResultsAtom, recentVisitHistoryAtom } from '../atoms/searchAtom';
import historyIcon from '../assets/icons/history.png';
import procedureList from '../transaction_procedures/procedureList.json';

const SearchResults = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useAtom(queryAtom);
  const [searchResults, setSearchResults] = useAtom(searchResultsAtom);
  const [recentVisitHistory, setRecentVisitHistory] = useAtom(recentVisitHistoryAtom);
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isHistoryMode, setIsHistoryMode] = useState(true);

  useEffect(() => {
    const storedHistory = localStorage.getItem('recentVisitHistory');
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory);
      const filteredHistory = parsedHistory
        .filter(item => item != null)
        .map(procNum => procedureList.find(proc => proc.procedureNumber === procNum) || null)
        .filter(proc => proc !== null);

      setRecentVisitHistory(filteredHistory);
    } else {
      const defaultProcedures = ['0004', '0013', '0022']
        .map(procNum => procedureList.find(proc => proc.procedureNumber === procNum))
        .filter(proc => proc !== null);
      setRecentVisitHistory(defaultProcedures);
    }
  }, [setRecentVisitHistory]);

  const handleSearchResultsClick = (item) => {
    const procedureNumber = item.procedureNumber || item;
    const procedure = procedureList.find(proc => proc.procedureNumber === procedureNumber);

    if (!procedure) return;

    setQuery('');
    setCurrentProcedure(procedureNumber);

    if (procedureNumber && 
        (!recentVisitHistory.length || procedureNumber !== recentVisitHistory[recentVisitHistory.length - 1]?.procedureNumber)) {
      
      const updatedHistory = [...recentVisitHistory.map(proc => proc.procedureNumber), procedureNumber];
      const limitedHistory = updatedHistory.length > 200 ? updatedHistory.slice(-200) : updatedHistory;

      setRecentVisitHistory(limitedHistory);
      localStorage.setItem('recentVisitHistory', JSON.stringify(limitedHistory));
    }

    navigate(`/procedure/${procedureNumber}`);
  };

  useEffect(() => {
    setHighlightedIndex(-1);
    setIsHistoryMode(query === '');
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentList = isHistoryMode ? recentVisitHistory.slice(-10).reverse() : searchResults;
      if (currentList.length === 0) return;
  
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((prevIndex) => 
          (prevIndex + 1) % currentList.length
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((prevIndex) => 
          (prevIndex - 1 + currentList.length) % currentList.length
        );
      } else if (e.key === 'Enter' && highlightedIndex !== -1) {
        e.preventDefault();
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
    <div>
      {query === '' && 
        <ul className='text-base text-gray-500'>
          {recentVisitHistory
            .slice(-10)
            .reverse()
            .map((visitHistory, index) => (
              <li 
                key={index}
                onClick={() => handleSearchResultsClick(visitHistory)}
                className={`flex items-center text-base text-gray-500 py-3 pl-4 hover:bg-[#f6f6f6] cursor-pointer ${
                  index === highlightedIndex ? 'bg-[#f6f6f6]' : ''
                }`}
              >
                <img src={historyIcon} className='w-5 mr-3'></img>
                {visitHistory.procedureName}
              </li>
            ))}
        </ul>
      }
      {query !== '' && 
        <ul className='text-base text-gray-500'>
          {searchResults.map((result, index) => (
            <li
              key={index}
              onClick={() => handleSearchResultsClick(result)}
              className={`flex items-center text-base text-gray-500 py-3 pl-4 hover:bg-[#f6f6f6] cursor-pointer ${
                index === highlightedIndex ? 'bg-[#f6f6f6]' : ''
              }`}
            >
              {result.procedureName}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default SearchResults;
