import React, { useState } from 'react'
import { ArrowLeft, Bookmark, Globe, Home, Repeat, Layers } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function ProcedureViewComponent() {
  const [isSaved, setIsSaved] = useState(false)
  const [selectedOption, setSelectedOption] = useState("domestic")

  const toggleSave = () => setIsSaved(!isSaved)

  const options = [
    { id: "domestic", title: "Domestic Wire Transfer", icon: Home },
    { id: "international", title: "International Wire Transfer", icon: Globe },
    { id: "recurring", title: "Recurring International Wire Transfer", icon: Repeat },
    { id: "batch", title: "Batch Domestic Wire Transfers", icon: Layers },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-4 sm:p-6 md:p-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="fixed top-4 left-4 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm w-12 h-12"
          >
            <ArrowLeft className="h-8 w-8 text-indigo-600" />
          </Button>
        </div>
        <div className="fixed top-4 right-4 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm w-12 h-12"
            onClick={toggleSave}
          >
            <Bookmark className={`h-8 w-8 ${isSaved ? 'text-yellow-500 fill-yellow-500' : 'text-indigo-600'}`} />
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-32px)]">
          <div className="pl-20 pr-4">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4 mt-16">Wire Transfer</h1>
            
            <p className="text-xl text-indigo-700 mb-6">Complete guide for processing wire transfers securely and efficiently.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {options.map((option) => (
                <Button
                  key={option.id}
                  variant={selectedOption === option.id ? "default" : "outline"}
                  className={`h-auto py-4 px-6 flex items-center justify-start space-x-3 text-left transition-all duration-200 ease-in-out ${
                    selectedOption === option.id 
                      ? 'bg-indigo-600 text-white shadow-lg scale-105 hover:bg-indigo-700' 
                      : 'bg-white text-indigo-600 hover:bg-indigo-100 hover:scale-102 hover:shadow-md active:bg-indigo-200'
                  } rounded-lg border-2 border-indigo-200`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <option.icon className="h-6 w-6 flex-shrink-0" />
                  <span className="font-medium">{option.title}</span>
                </Button>
              ))}
            </div>

            <ProcedureContent type={options.find(opt => opt.id === selectedOption)?.title || "Domestic Wire Transfer"} />
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

function ProcedureContent({ type }) {
  return (
    <div className="space-y-12">
      <div className="mb-8">
        <img
          src={`/placeholder.svg?height=400&width=800&text=${type}+Overview`}
          alt={`${type} Overview`}
          className="rounded-lg object-cover w-full shadow-lg"
        />
      </div>
      <section>
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Preparation</h2>
        <ol className="list-decimal list-inside space-y-6">
          <li className="text-lg text-indigo-700">
            <p className="mb-2">Verify customer identity</p>
            <img
              src="/placeholder.svg?height=300&width=600&text=ID+Verification"
              alt="ID Verification"
              className="rounded-md object-cover w-full shadow-md"
            />
            <p className="mt-2 text-sm text-indigo-600">Check government-issued ID</p>
          </li>
          <li className="text-lg text-indigo-700">
            <p>Confirm transfer amount and currency</p>
          </li>
          <li className="text-lg text-indigo-700">
            <p className="mb-2">Obtain recipient's bank details</p>
            <img
              src="/placeholder.svg?height=300&width=600&text=Bank+Details+Form"
              alt="Bank Details Form"
              className="rounded-md object-cover w-full shadow-md"
            />
          </li>
        </ol>
      </section>
      <Separator className="bg-indigo-200" />
      <section>
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Processing</h2>
        <ol className="list-decimal list-inside space-y-6">
          <li className="text-lg text-indigo-700">
            <p className="mb-2">Enter transfer details in the system</p>
            <img
              src="/placeholder.svg?height=300&width=600&text=Transfer+Details+Screen"
              alt="Transfer Details Screen"
              className="rounded-md object-cover w-full shadow-md"
            />
          </li>
          <li className="text-lg text-indigo-700">
            <p>Double-check all entered information</p>
          </li>
          <li className="text-lg text-indigo-700">
            <p className="mb-2">Confirm transfer fees with the customer</p>
            <img
              src="/placeholder.svg?height=300&width=600&text=Fee+Structure+Chart"
              alt="Fee Structure Chart"
              className="rounded-md object-cover w-full shadow-md"
            />
            <p className="mt-2 text-sm text-indigo-600">Fees may vary based on destination and amount</p>
          </li>
        </ol>
      </section>
      <Separator className="bg-indigo-200" />
      <section>
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Completion</h2>
        <ol className="list-decimal list-inside space-y-6">
          <li className="text-lg text-indigo-700">
            <p>Process the transfer</p>
          </li>
          <li className="text-lg text-indigo-700">
            <p className="mb-2">Provide customer with transaction receipt</p>
            <img
              src="/placeholder.svg?height=300&width=600&text=Sample+Receipt"
              alt="Sample Receipt"
              className="rounded-md object-cover w-full shadow-md"
            />
          </li>
          <li className="text-lg text-indigo-700">
            <p>Inform customer about expected transfer time</p>
            <p className="mt-2 text-sm text-indigo-600">
              {type.includes('Domestic') ? 'Usually 1-2 business days' : 'Usually 3-5 business days for international transfers'}
            </p>
          </li>
        </ol>
      </section>
    </div>
  )
}