import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { CreditCard, Banknote, DollarSign } from 'lucide-react'
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1usdcheque from './0013-1.png'
import i2usdcheque from './0013-2.png'
import i3usdcheque from './0013-3.png'
import i4usdcheque from './0013-4.png'
import i5usdcheque from './0013-5.png'
import i6usdcheque from './0013-6.png'
import i1usdcash from './0013-usd-cash-1.png'
import i2usdcash from './0013-usd-cash-2.png'
import i3usdcash from './0013-usd-cash-3.png'
import i4usdcash from './0013-usd-cash-4.png'
import i5usdcash from './0013-usd-cash-5.png'
import i6usdcash from './0013-usd-cash-6.png'
import i1usdaccount from './0013-usd-account-1.png'
import i2usdaccount from './0013-usd-account-2.png'


function Procedure0013() {
  const [selectedOption, setSelectedOption] = useState("usd-cash")

  const usdOptions = [
    { id: "usd-cash", title: "USD Cash", icon: DollarSign },
    { id: "usd-account", title: "USD Account", icon: CreditCard },
    { id: "usd-cheque", title: "USD Cheque", icon: Banknote },
  ]

  const cadOptions = [
    { id: "cad-cash", title: "CAD Cash", icon: DollarSign },
    { id: "cad-account", title: "CAD Account", icon: CreditCard },
    { id: "cad-cheque", title: "CAD Cheque", icon: Banknote },
  ]

  const allOptions = [...usdOptions, ...cadOptions]

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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Pay USD Visa</h1>

          <div className="space-y-12">
            <section>
              <p className="text-lg font-medium text-indigo-700 mb-2">Select Payment Method:</p>
              <div className="space-y-2 px-1">
                <div className="grid grid-cols-3 gap-2">
                  {usdOptions.map((option) => (
                    <Button
                      key={option.id}
                      variant={selectedOption === option.id ? "default" : "outline"}
                      className={`h-auto py-1.5 px-3 flex items-center space-x-2 text-left transition-all duration-200 ease-in-out origin-center ${
                        selectedOption === option.id 
                          ? 'bg-indigo-600 text-white shadow-lg scale-[1.02] hover:bg-indigo-700' 
                          : 'bg-white text-indigo-600 hover:bg-indigo-100 hover:scale-[1.01] hover:shadow-md active:bg-indigo-200'
                      } rounded-lg border-2 border-indigo-200`}
                      onClick={() => setSelectedOption(option.id)}
                    >
                      <option.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="font-medium text-sm whitespace-nowrap">{option.title}</span>
                    </Button>
                  ))}
                </div>
                {/* <div className="grid grid-cols-3 gap-2">
                  {cadOptions.map((option) => (
                    <Button
                      key={option.id}
                      variant={selectedOption === option.id ? "default" : "outline"}
                      className={`h-auto py-1.5 px-3 flex items-center space-x-2 text-left transition-all duration-200 ease-in-out origin-center ${
                        selectedOption === option.id 
                          ? 'bg-indigo-600 text-white shadow-lg scale-[1.02] hover:bg-indigo-700' 
                          : 'bg-white text-indigo-600 hover:bg-indigo-100 hover:scale-[1.01] hover:shadow-md active:bg-indigo-200'
                      } rounded-lg border-2 border-indigo-200`}
                      onClick={() => setSelectedOption(option.id)}
                    >
                      <option.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="font-medium text-sm whitespace-nowrap">{option.title}</span>
                    </Button>
                  ))}
                </div> */}
              </div>
            </section>

            {selectedOption === "usd-cash" && (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <img src={i1usdcash} alt="Initial Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i2usdcash} alt="Amount Entry" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i3usdcash} alt="Post Transaction" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>
                  </div>
                </section>

                <Separator className="bg-indigo-200" />

                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE: Foreign Exchange</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <img src={i4usdcash} alt="COINS Details" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <img src={i5usdcash} alt="COINS Process" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <p>Pressing Accept & Post will print Branch Copy</p>
                    </div>
                  </div>
                </section>

                <Separator className="bg-indigo-200" />
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 11 - 3</h2>
                  <div className="text-lg text-indigo-700">
                    <div className="space-y-6">
                      <img src={i6usdcash} alt="Final Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <p>COUNTER RATE can be found on Branch Copy of the previous section</p>
                    </div>
                  </div>
                </section>
              </>
            )}

            {selectedOption === "usd-cheque" && (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <img src={i6usdcheque} alt="CBFE" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <img src={i1usdcheque} alt="Initial Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i2usdcheque} alt="Amount Entry" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i3usdcheque} alt="Post Transaction" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>
                  </div>
                </section>

                <Separator className="bg-indigo-200" />

                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 11 - 2</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <img src={i4usdcheque} alt="COINS Details" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <ul className="space-y-2">
                        <li>TR/ACCT...: 90002 / 0540307</li>
                        <li>COMMENTS..: Client's USD Credit Card Number</li>
                        <li>Once filled, Press F1</li>
                      </ul>
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i5usdcheque} alt="Final Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <p>Press F6 and insert A4 paper into printer</p>
                    </div>
                  </div>
                </section>
              </>
            )}

            {selectedOption === "usd-account" && (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <img src={i1usdaccount} alt="Initial Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <img src={i2usdaccount} alt="Final Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>
                  </div>
                </section>
              </>
            )}

            {selectedOption !== "usd-cheque" && selectedOption !== "usd-cash" && selectedOption !== "usd-account" && (
              <section>
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
                  {allOptions.find(opt => opt.id === selectedOption)?.title}
                </h2>
                <div className="text-lg text-indigo-700">
                  <p>Placeholder content for {selectedOption} procedure</p>
                </div>
              </section>
            )}
          </div>
          <div className="h-48" />
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0013;