import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Globe, ArrowRight } from 'lucide-react'
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0004-1.png'
import i2 from './0004-2.png'
import i3 from './0004-3.png'
import i4 from './0004-4.png'
import i5 from './0004-5.png'
import i6 from './0004-6.png'
import i7 from './0004-7.png'

function Procedure0004() {
  const [accountCurrency, setAccountCurrency] = useState("")
  const [wireCurrency, setWireCurrency] = useState("")
  const [destinationCountry, setDestinationCountry] = useState("")

  const accountCurrencies = [
    { id: "CAD", label: "CAD" },
    { id: "USD", label: "USD" },
  ]

  const wireCurrencies = [
    { id: "CAD", label: "CAD" },
    { id: "USD", label: "USD" },
    { id: "OTHER", label: "Other" },
  ]

  const destinationCountries = [
    { id: "CAN", label: "Canada" },
    { id: "ROW", label: "Rest of World" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="fixed top-2 left-2 z-10">
          <BackButton />
        </div>
        <div className="fixed top-2 right-2 z-10">
          <SaveProcedureButton />
        </div>
        <ScrollAreaNoBar className="h-[calc(100vh)] hideScrollbar">
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Wire Transfer</h1>

          <Card className="mb-8 bg-white/50 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/3 space-y-2">
                  <label className="text-sm font-medium text-indigo-700 flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Account Currency
                  </label>
                  <Select value={accountCurrency} onValueChange={setAccountCurrency}>
                    <SelectTrigger className="w-full bg-white border-2 border-indigo-200 focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="Select currency" />
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

                <ArrowRight className="hidden md:block w-8 h-8 text-indigo-400" />

                <div className="w-full md:w-1/3 space-y-2">
                  <label className="text-sm font-medium text-indigo-700 flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Wire Currency
                  </label>
                  <Select value={wireCurrency} onValueChange={setWireCurrency}>
                    <SelectTrigger className="w-full bg-white border-2 border-indigo-200 focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      {wireCurrencies.map((currency) => (
                        <SelectItem key={currency.id} value={currency.id}>
                          {currency.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <ArrowRight className="hidden md:block w-8 h-8 text-indigo-400" />

                <div className="w-full md:w-1/3 space-y-2">
                  <label className="text-sm font-medium text-indigo-700 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Destination
                  </label>
                  <Select value={destinationCountry} onValueChange={setDestinationCountry}>
                    <SelectTrigger className="w-full bg-white border-2 border-indigo-200 focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinationCountries.map((country) => (
                        <SelectItem key={country.id} value={country.id}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {accountCurrency && wireCurrency && destinationCountry && (
            <div className="space-y-12">
              {/* CAD Account */}
              {accountCurrency === "CAD" && (
                <>
                  {/* CAD to CAD - Canada */}
                  {wireCurrency === "CAD" && destinationCountry === "CAN" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CAD Account to CAD Wire - Canada</h2>
                      <div className="space-y-6">
                        {/* Content for CAD Account -> CAD Wire -> Canada */}
                      </div>
                    </section>
                  )}

                  {/* CAD to CAD - ROW */}
                  {wireCurrency === "CAD" && destinationCountry === "ROW" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CAD Account to CAD Wire - International</h2>
                      <div className="space-y-6">
                        {/* Content for CAD Account -> CAD Wire -> International */}
                      </div>
                    </section>
                  )}

                  {/* CAD to USD - Canada */}
                  {wireCurrency === "USD" && destinationCountry === "CAN" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CAD Account to USD Wire - Canada</h2>
                      <div className="space-y-6">
                        {/* Content for CAD Account -> USD Wire -> Canada */}
                      </div>
                    </section>
                  )}

                  {/* CAD to USD - ROW */}
                  {wireCurrency === "USD" && destinationCountry === "ROW" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CAD Account to USD Wire - International</h2>
                      <div className="space-y-6">
                        {/* Content for CAD Account -> USD Wire -> International */}
                      </div>
                    </section>
                  )}

                  {/* CAD to OTHER - Canada */}
                  {wireCurrency === "OTHER" && destinationCountry === "CAN" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CAD Account to Other Currency Wire - Canada</h2>
                      <div className="space-y-6">
                        {/* Content for CAD Account -> Other Currency Wire -> Canada */}
                      </div>
                    </section>
                  )}

                  {/* CAD to OTHER - ROW */}
                  {wireCurrency === "OTHER" && destinationCountry === "ROW" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CAD Account to Other Currency Wire - International</h2>
                      <div className="space-y-6">
                        {/* Content for CAD Account -> Other Currency Wire -> International */}
                      </div>
                    </section>
                  )}
                </>
              )}

              {/* USD Account */}
              {accountCurrency === "USD" && (
                <>
                  {/* USD to CAD - Canada */}
                  {wireCurrency === "CAD" && destinationCountry === "CAN" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">USD Account to CAD Wire - Canada</h2>
                      <div className="space-y-6">
                        {/* Content for USD Account -> CAD Wire -> Canada */}
                      </div>
                    </section>
                  )}

                  {/* USD to CAD - ROW */}
                  {wireCurrency === "CAD" && destinationCountry === "ROW" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">USD Account to CAD Wire - International</h2>
                      <div className="space-y-6">
                        {/* Content for USD Account -> CAD Wire -> International */}
                      </div>
                    </section>
                  )}

                  {/* USD to USD - Canada */}
                  {wireCurrency === "USD" && destinationCountry === "CAN" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Send USD from USD Account within Canada</h2>
                      <div className="space-y-6">
                        {/* Content for USD Account -> USD Wire -> Canada */}
                      </div>
                    </section>
                  )}

                  {/* USD to USD - ROW */}
                  {wireCurrency === "USD" && destinationCountry === "ROW" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">USD Account to USD Wire - International</h2>
                      <div className="space-y-6">
                        {/* Content for USD Account -> USD Wire -> International */}
                      </div>
                    </section>
                  )}

                  {/* USD to OTHER - Canada */}
                  {wireCurrency === "OTHER" && destinationCountry === "CAN" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">USD Account to Other Currency Wire - Canada</h2>
                      <div className="space-y-6">
                        {/* Content for USD Account -> Other Currency Wire -> Canada */}
                      </div>
                    </section>
                  )}

                  {/* USD to OTHER - ROW */}
                  {wireCurrency === "OTHER" && destinationCountry === "ROW" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">USD Account to Other Currency Wire - International</h2>
                      <div className="space-y-6">
                        {/* Content for USD Account -> Other Currency Wire -> International */}
                      </div>
                    </section>
                  )}
                </>
              )}
            </div>
          )}
          <div className="h-48" />
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0004;