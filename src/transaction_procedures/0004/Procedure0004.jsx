import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Globe, ArrowRight } from 'lucide-react'
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import Procedure0004CommonStepsMiddle1 from './Procedure004CommonStepsMiddle1';
import Procedure0004CommonStepsEnd from './Procedure0004CommonStepsEnd';
import i1cadcadcanada from './cad-cad-canada/0004-cad-cad-canada-1.png'
import i5cadcadcanada from './cad-cad-canada/0004-cad-cad-canada-5.png'
import i6cadcadcanada from './cad-cad-canada/0004-cad-cad-canada-6.png'
import i7cadcadcanada from './cad-cad-canada/0004-cad-cad-canada-7.png'
import i1cadcadrow from './cad-cad-row/0004-cad-cad-row-1.png'
import i2cadcadrow from './cad-cad-row/0004-cad-cad-row-2.png'
import i1cadusdcanada from './cad-usd-canada/0004-cad-usd-canada-1.png'
import i2cadusdcanada from './cad-usd-canada/0004-cad-usd-canada-2.png'
import i3cadusdcanada from './cad-usd-canada/0004-cad-usd-canada-3.png'
import i4cadusdcanada from './cad-usd-canada/0004-cad-usd-canada-4.png'
import i1cadusdrow from './cad-usd-row/0004-cad-usd-row-1.png'
import i1cadothercanada from './cad-other-canada/0004-cad-other-canada-1.png'
import i1cadotherrow from './cad-other-row/0004-cad-other-row-1.png'


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

          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 12 - 2 - 1</h2>
          <Separator className="bg-indigo-200" />

          
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
                        <img src={i1cadcadcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <Procedure0004CommonStepsMiddle1 />
                        <img src={i5cadcadcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <img src={i6cadcadcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <img src={i7cadcadcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <Procedure0004CommonStepsEnd />
                      </div>
                    </section>
                  )}

                  {/* CAD to CAD - ROW */}
                  {wireCurrency === "CAD" && destinationCountry === "ROW" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CAD Account to CAD Wire - International</h2>
                      <div className="space-y-6">
                      <img src={i2cadcadrow} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <Procedure0004CommonStepsMiddle1 />
                        <img src={i5cadcadcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <img src={i1cadcadrow} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <Procedure0004CommonStepsEnd />
                      </div>
                    </section>
                  )}

                  {/* CAD to USD - Canada */}
                  {wireCurrency === "USD" && destinationCountry === "CAN" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CAD Account to USD Wire - Canada</h2>
                      <div className="space-y-6">
                        <img src={i1cadusdcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <Procedure0004CommonStepsMiddle1 />
                        <img src={i2cadusdcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <img src={i3cadusdcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <img src={i4cadusdcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <Procedure0004CommonStepsEnd />
                      </div>
                    </section>
                  )}

                  {/* CAD to USD - ROW */}
                  {wireCurrency === "USD" && destinationCountry === "ROW" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CAD Account to USD Wire - International</h2>
                      <div className="space-y-6">
                        <img src={i1cadusdrow} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <Procedure0004CommonStepsMiddle1 />
                        <img src={i2cadusdcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <img src={i1cadcadrow} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <Procedure0004CommonStepsEnd />
                      </div>
                    </section>
                  )}

                  {/* CAD to OTHER - Canada */}
                  {wireCurrency === "OTHER" && destinationCountry === "CAN" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CAD Account to Other Currency Wire - Canada</h2>
                      <div className="space-y-6">
                        <img src={i1cadothercanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <Procedure0004CommonStepsMiddle1 />
                        <img src={i2cadusdcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <img src={i3cadusdcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <img src={i4cadusdcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <Procedure0004CommonStepsEnd />
                      </div>
                    </section>
                  )}

                  {/* CAD to OTHER - ROW */}
                  {wireCurrency === "OTHER" && destinationCountry === "ROW" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CAD Account to Other Currency Wire - International</h2>
                      <div className="space-y-6">
                        <img src={i1cadotherrow} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <Procedure0004CommonStepsMiddle1 />
                        <img src={i2cadusdcanada} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <img src={i1cadcadrow} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        <Procedure0004CommonStepsEnd />
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
                        <p className="text-2xl text-indigo-700 mb-2">This procedure has not been prepared yet</p>
                      </div>
                    </section>
                  )}

                  {/* USD to CAD - ROW */}
                  {wireCurrency === "CAD" && destinationCountry === "ROW" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">USD Account to CAD Wire - International</h2>
                      <div className="space-y-6">
                        {/* Content for USD Account -> CAD Wire -> International */}
                        <p className="text-2xl text-indigo-700 mb-2">This procedure has not been prepared yet</p>
                      </div>
                    </section>
                  )}

                  {/* USD to USD - Canada */}
                  {wireCurrency === "USD" && destinationCountry === "CAN" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Send USD from USD Account within Canada</h2>
                      <div className="space-y-6">
                        {/* Content for USD Account -> USD Wire -> Canada */}
                        <p className="text-2xl text-indigo-700 mb-2">This procedure has not been prepared yet</p>
                      </div>
                    </section>
                  )}

                  {/* USD to USD - ROW */}
                  {wireCurrency === "USD" && destinationCountry === "ROW" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">USD Account to USD Wire - International</h2>
                      <div className="space-y-6">
                        {/* Content for USD Account -> USD Wire -> International */}
                        <p className="text-2xl text-indigo-700 mb-2">This procedure has not been prepared yet</p>

                      </div>
                    </section>
                  )}

                  {/* USD to OTHER - Canada */}
                  {wireCurrency === "OTHER" && destinationCountry === "CAN" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">USD Account to Other Currency Wire - Canada</h2>
                      <div className="space-y-6">
                        {/* Content for USD Account -> Other Currency Wire -> Canada */}
                        <p className="text-2xl text-indigo-700 mb-2">This procedure has not been prepared yet</p>
                      </div>
                    </section>
                  )}

                  {/* USD to OTHER - ROW */}
                  {wireCurrency === "OTHER" && destinationCountry === "ROW" && (
                    <section>
                      <h2 className="text-2xl font-semibold text-indigo-800 mb-4">USD Account to Other Currency Wire - International</h2>
                      <div className="space-y-6">
                        {/* Content for USD Account -> Other Currency Wire -> International */}
                        <p className="text-2xl text-indigo-700 mb-2">This procedure has not been prepared yet</p>
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