import React, { useState, useEffect } from 'react'
import { Search, Clock, Bookmark, ChevronRight, DollarSign, Lock, Send, FileText, CreditCard, Briefcase, HelpCircle, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CsrBibleDashboardJsx() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const allProcedures = [
    { name: "Traders RSG - Currency Exchange", icon: <DollarSign className="w-5 h-5" /> },
    { name: "How to Close (CSR)", icon: <Lock className="w-5 h-5" /> },
    { name: "Wire Transfer", icon: <Send className="w-5 h-5" /> },
    { name: "Pay USD Visa with USD Cheque", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Bank Draft in CAD", icon: <FileText className="w-5 h-5" /> },
    { name: "Pay USD Visa with USD Account", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Open a New Safety Deposit Box", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Deposit Foreign Cheque", icon: <FileText className="w-5 h-5" /> },
    { name: "Change Account Statement Type", icon: <FileText className="w-5 h-5" /> },
    { name: "Order New Cheque Book", icon: <FileText className="w-5 h-5" /> },
  ]

  const recentProcedures = allProcedures.slice(0, 3)
  const savedProcedures = allProcedures.slice(3, 5)

  useEffect(() => {
    if (searchTerm) {
      const results = allProcedures.filter(procedure =>
        procedure.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchTerm])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const clearSearch = () => {
    setSearchTerm('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">CSR Bible</h1>
        
        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl blur-xl opacity-75"></div>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-indigo-500" />
            </div>
            <Input
              type="search"
              placeholder="Search CSR procedures..."
              className="block w-full pl-12 pr-12 py-6 border-none text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 text-xl"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                onClick={clearSearch}
              >
                <X className="h-6 w-6 text-gray-500" />
              </Button>
            )}
          </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
            <ScrollArea className="h-[400px]">
              {searchResults.map((procedure, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 hover:bg-indigo-50 cursor-pointer border-b border-gray-100 transition-colors duration-150 ease-in-out"
                >
                  <div className="text-indigo-600 mr-4">{procedure.icon}</div>
                  <span className="text-lg text-gray-800">{procedure.name}</span>
                  <ChevronRight className="ml-auto text-gray-400" />
                </div>
              ))}
            </ScrollArea>
          </div>
        )}

        {/* No Results Message */}
        {searchTerm && searchResults.length === 0 && (
          <div className="text-center p-4 bg-white rounded-xl shadow-lg mb-8">
            <p className="text-gray-600">No procedures found. Try a different search term.</p>
          </div>
        )}

        {/* Recent and Saved Procedures */}
        {!searchTerm && (
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
                {recentProcedures.map((procedure, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 hover:bg-indigo-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150 ease-in-out"
                  >
                    <div className="text-indigo-600 mr-4">{procedure.icon}</div>
                    <span className="text-lg text-gray-800">{procedure.name}</span>
                    <ChevronRight className="ml-auto text-gray-400" />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="saved">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {savedProcedures.map((procedure, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 hover:bg-indigo-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150 ease-in-out"
                  >
                    <div className="text-indigo-600 mr-4">{procedure.icon}</div>
                    <span className="text-lg text-gray-800">{procedure.name}</span>
                    <ChevronRight className="ml-auto text-gray-400" />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}