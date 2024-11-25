import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Wallet, CreditCard } from 'lucide-react'
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0012-1.png'
import i2 from './0012-2.png'
import i3 from './0012-3.png'
import i1plc from './plc/0012-plc-1.png'
import i2plc from './plc/0012-plc-2.png'
import i3plc from './plc/0012-plc-3.png'
import i4plc from './plc/0012-plc-4.png'
import i5plc from './plc/0012-plc-5.png'

function Procedure0012() {
  const [selectedOption, setSelectedOption] = useState("regular")

  const accountOptions = [
    { id: "regular", title: "Chequing, Savings, USD", icon: Wallet },
    { id: "plc", title: "PLC", icon: CreditCard },
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Close Account</h1>

          <div className="space-y-12">
            <section>
              <p className="text-lg text-indigo-700 mb-2">Account closing will not work on Saturdays (being future dated on Friday afternoon) & non-business days</p>
              <p className="text-lg font-medium text-indigo-700 mb-2">Select Account Type:</p>
              <div className="space-y-2 px-1">
                <div className="grid grid-cols-2 gap-2">
                  {accountOptions.map((option) => (
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
              </div>
            </section>

            {selectedOption === "regular" && (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
                  <div className="text-lg text-indigo-700 space-y-6">
                    <img src={i3} alt="Account Balance" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <ul className="space-y-2">
                      <li>Ensure account balance is "0"</li>
                      <li></li>
                    </ul>

                    <div className="text-lg text-indigo-700">
                      <img src={i1} alt="Function Selection" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i2} alt="Close Account" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>
                  </div>
                </section>
              </>
            )}

            {selectedOption === "plc" && (
              <section>
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 22</h2>
                <div className="text-lg text-indigo-700 space-y-6">

                  <img src={i1plc} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <img src={i2plc} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="text-2xl text-indigo-700 mb-2">If PLC has outstanding balance to be paid, select the payment method</p>
                  <p className='text-xl text-indigo-700 mb-2'>Source 1: If client wants to pay from their CIBC account, type in transit and account number</p>
                  <p className='text-xl text-indigo-700 mb-2'>Source 2: If client wants to pay with cash or instruments, use "Log Cash/Instrument" on CBFE to process payment. Search "Pay Class Loan" procedure for further instructions</p>
                  <img src={i3plc} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <img src={i4plc} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <img src={i5plc} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                </div>
              </section>
            )}
          </div>
          <div className="h-48" /> {/* Spacing at bottom for scrolling */}
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0012;