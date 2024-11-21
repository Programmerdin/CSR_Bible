import React, { useState } from 'react'
import { ArrowLeft, Bookmark, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function BankDraftProcedureComponent() {
  const [isSaved, setIsSaved] = useState(false)
  const [draftCurrency, setDraftCurrency] = useState("")
  const [accountCurrency, setAccountCurrency] = useState("")

  const toggleSave = () => setIsSaved(!isSaved)

  const draftCurrencies = [
    { id: "CAD", label: "Canadian Dollar (CAD)" },
    { id: "USD", label: "US Dollar (USD)" },
    { id: "OTHER", label: "Other Currencies" },
  ]

  const accountCurrencies = [
    { id: "CAD", label: "Canadian Dollar (CAD)" },
    { id: "USD", label: "US Dollar (USD)" },
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
            <h1 className="text-4xl font-bold text-indigo-900 mb-4 mt-16">Bank Draft Procedure</h1>
            
            <p className="text-xl text-indigo-700 mb-6">Select the Bank Draft Currency and Account Currency:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label htmlFor="draft-currency" className="text-sm font-medium text-indigo-700">
                  Bank Draft Currency
                </label>
                <Select value={draftCurrency} onValueChange={setDraftCurrency}>
                  <SelectTrigger id="draft-currency" className="w-full bg-white border-2 border-indigo-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <SelectValue placeholder="Select draft currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {draftCurrencies.map((currency) => (
                      <SelectItem key={currency.id} value={currency.id}>
                        {currency.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="account-currency" className="text-sm font-medium text-indigo-700">
                  Account Currency
                </label>
                <Select value={accountCurrency} onValueChange={setAccountCurrency}>
                  <SelectTrigger id="account-currency" className="w-full bg-white border-2 border-indigo-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <SelectValue placeholder="Select account currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {accountCurrencies.map((currency) => (
                      <SelectItem key={currency.id} value={currency.id}>
                        {currency.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {draftCurrency && accountCurrency && (
              <ProcedureContent draftCurrency={draftCurrency} accountCurrency={accountCurrency} />
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

function ProcedureContent({ draftCurrency, accountCurrency }) {
  const procedures = {
    "CAD-CAD": {
      title: "CAD Bank Draft from CAD Account",
      steps: [
        "Verify customer's CAD account balance",
        "Confirm bank draft amount in CAD",
        "Process the draft using the standard CAD template",
        "Deduct the amount plus any fees from the CAD account",
        "Print and validate the CAD bank draft",
        "Have the customer sign the draft receipt"
      ]
    },
    "USD-USD": {
      title: "USD Bank Draft from USD Account",
      steps: [
        "Verify customer's USD account balance",
        "Confirm bank draft amount in USD",
        "Process the draft using the USD draft template",
        "Deduct the amount plus any fees from the USD account",
        "Print and validate the USD bank draft",
        "Have the customer sign the draft receipt"
      ]
    },
    "USD-CAD": {
      title: "USD Bank Draft from CAD Account",
      steps: [
        "Verify customer's CAD account balance",
        "Confirm bank draft amount in USD",
        "Calculate the equivalent amount in CAD using current exchange rate",
        "Process the draft using the USD draft template",
        "Deduct the CAD equivalent amount plus any fees from the CAD account",
        "Print and validate the USD bank draft",
        "Provide the customer with exchange rate information",
        "Have the customer sign the draft receipt and exchange rate acknowledgment"
      ]
    },
    "CAD-USD": {
      title: "CAD Bank Draft from USD Account",
      steps: [
        "Verify customer's USD account balance",
        "Confirm bank draft amount in CAD",
        "Calculate the equivalent amount in USD using current exchange rate",
        "Process the draft using the CAD draft template",
        "Deduct the USD equivalent amount plus any fees from the USD account",
        "Print and validate the CAD bank draft",
        "Provide the customer with exchange rate information",
        "Have the customer sign the draft receipt and exchange rate acknowledgment"
      ]
    },
    "OTHER-CAD": {
      title: "Foreign Currency Bank Draft from CAD Account",
      steps: [
        "Verify customer's CAD account balance",
        "Confirm bank draft amount in the foreign currency",
        "Calculate the equivalent amount in CAD using current exchange rate",
        "Process the draft using the appropriate foreign currency template",
        "Deduct the CAD equivalent amount plus any fees from the CAD account",
        "Print and validate the foreign currency bank draft",
        "Provide the customer with exchange rate information",
        "Have the customer sign the draft receipt and exchange rate acknowledgment"
      ]
    },
    "OTHER-USD": {
      title: "Foreign Currency Bank Draft from USD Account",
      steps: [
        "Verify customer's USD account balance",
        "Confirm bank draft amount in the foreign currency",
        "Calculate the equivalent amount in USD using current exchange rate",
        "Process the draft using the appropriate foreign currency template",
        "Deduct the USD equivalent amount plus any fees from the USD account",
        "Print and validate the foreign currency bank draft",
        "Provide the customer with exchange rate information",
        "Have the customer sign the draft receipt and exchange rate acknowledgment"
      ]
    }
  }

  const procedureKey = `${draftCurrency}-${accountCurrency}`
  const procedure = procedures[procedureKey] || procedures["CAD-CAD"] // Default to CAD-CAD if combination not found

  return (
    <div className="space-y-12">
      <div className="mb-8">
        <img
          src={`/placeholder.svg?height=400&width=800&text=${procedure.title}`}
          alt={procedure.title}
          className="rounded-lg object-cover w-full shadow-lg"
        />
      </div>
      <section>
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">{procedure.title}</h2>
        <ol className="list-decimal list-inside space-y-4">
          {procedure.steps.map((step, index) => (
            <li key={index} className="text-lg text-indigo-700">{step}</li>
          ))}
        </ol>
      </section>
      <Separator className="bg-indigo-200" />
      <section>
        <h3 className="text-xl font-semibold text-indigo-800 mb-4">Additional Notes:</h3>
        <p className="text-lg text-indigo-700">
          Ensure all currency conversions are done using the most up-to-date exchange rates. 
          For drafts involving foreign currencies other than USD, additional processing time may be required.
        </p>
      </section>
    </div>
  )
}