'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Search, Clock, Bookmark, ChevronRight, DollarSign, Lock, Send, FileText, CreditCard, Briefcase, HelpCircle } from 'lucide-react'
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAtom } from 'jotai'
import { recentVisitHistoryAtom } from '../atoms/searchAtom'
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom'
import { currentProcedureAtom, savedProceduresAtom } from '../atoms/procedureAtom'
import procedureList from '../transaction_procedures/procedureList.json'
import Fuse from 'fuse.js'
import { queryAtom, searchResultsAtom } from '../atoms/searchAtom'

export function TellerDashboardJsx() {
  const [query, setQuery] = useAtom(queryAtom)
  const [searchResults, setSearchResults] = useAtom(searchResultsAtom)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const suggestionsRef = useRef(null)
  const [recentVisitHistory, setRecentVisitHistory] = useAtom(recentVisitHistoryAtom)
  const [currentView, setCurrentView] = useAtom(currentViewAtom)
  const [lastView, setLastView] = useAtom(lastViewAtom)
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom)
  const [savedProcedures] = useAtom(savedProceduresAtom)
  const [savedProceduresWithDetails, setSavedProceduresWithDetails] = useState([])

  const fuse = new Fuse(procedureList, {
    keys: ['procedureNumber', 'procedureName', 'tags'],
  })

  useEffect(() => {
    const temp = savedProcedures
      .map(procNum => procedureList.find(proc => proc.procedureNumber === procNum) || null)
      .filter(proc => proc !== null);
    setSavedProceduresWithDetails(temp);
  }, [savedProcedures]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (query.length > 0) {
      const results = fuse.search(query)
      setSearchResults(results.map(result => result.item))
      setShowSuggestions(true)
    } else {
      setSearchResults([])
      setShowSuggestions(false)
    }
  }, [query, setSearchResults])

  const handleSearchChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClearInput = () => {
    setQuery('')
    setSearchResults([])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.blur()
    }
  }

  const handleProcedureClick = (procedure) => {
    setLastView(currentView)
    setCurrentProcedure(procedure.procedureNumber)
    setCurrentView('procedure')
  }

  const recentProcedures = recentVisitHistory.slice(-10).reverse()

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 text-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 relative">
          <div className={`relative transition-all duration-300 ${isFocused ? 'shadow-lg' : 'shadow'} rounded-lg`}>
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-sky-600' : 'text-slate-400'}`} />
            <Input
              type="search"
              placeholder="Search procedures..."
              className="pl-10 pr-4 py-2 w-full border-2 border-transparent bg-white focus:border-sky-400 focus:outline-none rounded-lg transition-all duration-300"
              value={query}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {query && (
              <button
                onClick={handleClearInput}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
          {showSuggestions && searchResults.length > 0 && (
            <Card 
              ref={suggestionsRef}
              className="absolute z-10 w-full mt-1 border-2 border-sky-200 shadow-lg"
            >
              <ScrollArea className="h-[300px]">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-sky-50 cursor-pointer flex items-center"
                    onClick={() => handleProcedureClick(result)}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    <span>{result.procedureName}</span>
                  </div>
                ))}
              </ScrollArea>
            </Card>
          )}
        </div>

        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-sky-100 rounded-lg p-1">
            <TabsTrigger 
              value="recent" 
              className="rounded-md data-[state=active]:bg-white data-[state=active]:text-sky-700 data-[state=active]:shadow"
            >
              Recent Procedures
            </TabsTrigger>
            <TabsTrigger 
              value="saved" 
              className="rounded-md data-[state=active]:bg-white data-[state=active]:text-sky-700 data-[state=active]:shadow"
            >
              Saved Procedures
            </TabsTrigger>
          </TabsList>
          <TabsContent value="recent">
            <Card className="border-2 border-sky-200">
              <CardHeader className="bg-gradient-to-r from-sky-100 to-indigo-100">
                <CardTitle className="flex items-center text-xl text-sky-800">
                  <Clock className="mr-2 text-sky-600" />
                  Recent Procedures
                </CardTitle>
                {/* <CardDescription className="text-slate-600">Recently viewed or used procedures</CardDescription> */}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recentProcedures.map((procedure, index) => (
                    <li key={index} className="flex items-center justify-between p-2 hover:bg-sky-50 rounded transition-colors cursor-pointer" onClick={() => handleProcedureClick(procedure)}>
                      <div className="flex items-center">
                        <div className="text-sky-600">{procedure.icon || <FileText className="w-5 h-5" />}</div>
                        <span className="ml-2 text-sm sm:text-base">{procedure.procedureName}</span>
                      </div>
                      <ChevronRight className="text-sky-400" />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="saved">
            <Card className="border-2 border-indigo-200">
              <CardHeader className="bg-gradient-to-r from-indigo-100 to-sky-100">
                <CardTitle className="flex items-center text-xl text-indigo-800">
                  <Bookmark className="mr-2 text-indigo-600" />
                  Saved Procedures
                </CardTitle>
                {/* <CardDescription className="text-slate-600">Your bookmarked procedures</CardDescription> */}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {savedProceduresWithDetails.map((procedure, index) => (
                    <li key={index} className="flex items-center justify-between p-2 hover:bg-indigo-50 rounded transition-colors cursor-pointer" onClick={() => handleProcedureClick(procedure)}>
                      <div className="flex items-center">
                        <div className="text-indigo-600"><FileText className="w-5 h-5" /></div>
                        <span className="ml-2 text-sm sm:text-base">{procedure.procedureName}</span>
                      </div>
                      <ChevronRight className="text-indigo-400" />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}