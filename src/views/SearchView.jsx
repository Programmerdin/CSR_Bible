import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Clock, Bookmark, ChevronRight, DollarSign, Lock, Send, FileText, CreditCard, Briefcase, HelpCircle, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAtom } from 'jotai';
import { recentVisitHistoryAtom, queryAtom, searchResultsAtom } from '../atoms/searchAtom';
import { currentProcedureAtom, savedProceduresAtom } from '../atoms/procedureAtom';
import procedureList from '../transaction_procedures/procedureList.json';
import Fuse from 'fuse.js';
import logo from '../assets/logos/logo_blue.png';

const SearchView = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useAtom(queryAtom);
  const [searchResults, setSearchResults] = useAtom(searchResultsAtom);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const suggestionsRef = useRef(null);
  const [recentVisitHistory, setRecentVisitHistory] = useAtom(recentVisitHistoryAtom);
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);
  const [savedProcedures] = useAtom(savedProceduresAtom);
  const [savedProceduresWithDetails, setSavedProceduresWithDetails] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const fuse = new Fuse(procedureList, {
    keys: ['procedureNumber', 'procedureName', 'tags'],
  });

  useEffect(() => {
    const temp = savedProcedures
      .map(procNum => procedureList.find(proc => proc.procedureNumber === procNum) || null)
      .filter(proc => proc !== null);
    setSavedProceduresWithDetails(temp);
  }, [savedProcedures]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('recentVisitHistory');
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory);
      const filteredHistory = parsedHistory
        .filter(item => item != null)
        .map(procNum => procedureList.find(proc => proc.procedureNumber === procNum) || null)
        .filter(proc => proc !== null);

      setRecentVisitHistory(filteredHistory);
    }
  }, [setRecentVisitHistory]);

  useEffect(() => {
    if (query.length > 0) {
      const results = fuse.search(query);
      setSearchResults(results.map(result => result.item));
      setShowSuggestions(true);
    } else {
      setSearchResults([]);
      setShowSuggestions(false);
    }
    setHighlightedIndex(-1);
  }, [query, setSearchResults]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClearInput = () => {
    setQuery('');
    setSearchResults([]);
  };

  const handleKeyDown = (e) => {
    if (searchResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => 
        (prevIndex + 1) % searchResults.length
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => 
        (prevIndex - 1 + searchResults.length) % searchResults.length
      );
    } else if (e.key === 'Enter') {
      if (highlightedIndex !== -1) {
        e.preventDefault();
        const selectedItem = searchResults[highlightedIndex];
        handleProcedureClick(selectedItem);
      }
      e.target.blur(); // Dismisses the keyboard
    }
  };

  const handleProcedureClick = (item) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-4 sm:p-6 md:p-8 relative">
      <div className="max-w-3xl mx-auto">
        <img src={logo} alt="CSR Bible Logo" className="h-12 mx-auto mb-10 mt-2" />
        
        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 rounded-2xl blur-xl opacity-75"></div>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-indigo-500" />
            </div>
            <Input
              type="search"
              placeholder="Search procedures..."
              className="block w-full pl-12 pr-12 py-6 border-none text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 text-xl"
              value={query}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-1/2 right-0 pr-4 transform -translate-y-1/2 flex items-center"
                onClick={handleClearInput}
              >
                <X className="h-6 w-6 text-gray-500" />
              </Button>
            )}
          </div>
        </div>

        {/* Search Results */}
        {query !== '' && (
          <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden" ref={suggestionsRef}>
            <ScrollArea className="h-[calc(100vh-250px)]">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-4 hover:bg-indigo-50 cursor-pointer border-b border-gray-100 transition-colors duration-150 ease-in-out ${highlightedIndex === index ? 'bg-indigo-50' : ''}`}
                    onClick={() => handleProcedureClick(result)}
                  >
                    <div className="text-indigo-600 mr-4"><FileText className="w-5 h-5" /></div>
                    <span className="text-lg text-gray-800">{result.procedureName}</span>
                    <ChevronRight className="ml-auto text-gray-400" />
                  </div>
                ))
              ) : (
                <div className="text-center p-4">
                  <p className="text-gray-600">No procedures found.</p>
                </div>
              )}
            </ScrollArea>
          </div>
        )}

        {/* Recent and Saved Procedures */}
        {!query && (
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4 p-1 bg-white rounded-lg shadow-md">
              <TabsTrigger 
                value="recent" 
                className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white text-gray-700 transition-all duration-200"
              >
                <Clock className="w-4 h-4 mr-2" />
                Recent
              </TabsTrigger>
              <TabsTrigger 
                value="saved" 
                className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white text-gray-700 transition-all duration-200"
              >
                <Bookmark className="w-4 h-4 mr-2" />
                Saved
              </TabsTrigger>
            </TabsList>
            <TabsContent value="recent">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ScrollArea className="h-[calc(100vh-350px)]">
                  {recentVisitHistory.slice(-12).reverse().map((procedure, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 hover:bg-indigo-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150 ease-in-out"
                      onClick={() => handleProcedureClick(procedure)}
                    >
                      <div className="text-indigo-600 mr-4"><FileText className="w-5 h-5" /></div>
                      <span className="text-lg text-gray-800">{procedure.procedureName}</span>
                      <ChevronRight className="ml-auto text-gray-400" />
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="saved">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ScrollArea className="h-[calc(100vh-350px)]">
                  {savedProceduresWithDetails.slice().reverse().map((procedure, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 hover:bg-indigo-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150 ease-in-out"
                      onClick={() => handleProcedureClick(procedure)}
                    >
                      <div className="text-indigo-600 mr-4"><FileText className="w-5 h-5" /></div>
                      <span className="text-lg text-gray-800">{procedure.procedureName}</span>
                      <ChevronRight className="ml-auto text-gray-400" />
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
      <footer className="fixed bottom-0 left-0 right-0 text-center text-gray-400">
        <div className="max-w-3xl mx-auto px-4 py-3 text-m">
          <div className="flex justify-center space-x-6">
            <a href="/all-procedures" className="text-gray-400 hover:text-gray-600">List of All Procedures</a>
            <a href="/about" className="text-gray-400 hover:text-gray-600">About</a>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default SearchView;
