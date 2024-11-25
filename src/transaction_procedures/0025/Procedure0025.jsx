import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { CreditCard, Banknote, DollarSign } from 'lucide-react'
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i0 from './pay-class-loan-w-cash-0.png'
import i1 from './pay-class-loan-w-cash-1.png'
import i2 from './pay-class-loan-w-cash-2.png'
import i3 from './pay-class-loan-w-cash-3.png'
import i4 from './pay-class-loan-w-cash-4.png'
import i5 from './pay-class-loan-w-cash-5.png'
import i6 from './pay-class-loan-w-cash-6.png'
import i7 from './pay-class-loan-w-cash-7.png'
import i8 from './pay-class-loan-w-cash-8.png'
import i9 from './pay-class-loan-w-cash-9.png'
import i10 from './pay-class-loan-w-cash-10.png'
import i11 from './pay-class-loan-w-cash-11.png'
import i12 from './pay-class-loan-w-cash-12.png'

function Procedure0025() {
  const [selectedOption, setSelectedOption] = useState("cash")

  const paymentOptions = [
    { id: "cash", title: "Cash", icon: DollarSign },
    { id: "cheque", title: "Cheque", icon: Banknote },
    { id: "account", title: "Account", icon: CreditCard },
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Pay Class Loan</h1>

          <div className="space-y-12">

          <section>
              <p className="text-lg font-medium text-indigo-700 mb-2">Select Payment Method:</p>
              <div className="space-y-2 px-1">
                <div className="grid grid-cols-3 gap-2">
                  {paymentOptions.map((option) => (
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





            {selectedOption === "cash" && (
              <>
                <section>
                    <h2 className="text-2xl font-semibold text-indigo-800 mb-4">ECIF</h2>
                    <p className="text-lg text-indigo-700 mb-2">Find Class Loan Number if client doesn't know it</p>
                    <div className="space-y-6">
                        <div className="text-lg text-indigo-700">
                        <img src={i0} alt="Initial setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                        </div>
                    </div>
                </section>

                <Separator className="bg-indigo-200" />
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                        <img src={i1} alt="Setup continued" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <img src={i2} alt="Payment details" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <img src={i3} alt="Payment details continued" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <img src={i4} alt="Additional details" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <img src={i5} alt="Processing payment" className="rounded-lg object-cover w-full shadow-lg mb-4" />

                    </div>
                  </div>
                </section>

                <Separator className="bg-indigo-200" />

                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 22</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <img src={i6} alt="Payment processing" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <img src={i7} alt="Processing continued" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <img src={i8} alt="Verification step" className="rounded-lg object-cover w-full shadow-lg mb-4" />

                    </div>
                  </div>
                </section>

                <Separator className="bg-indigo-200" />

                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 22 - 11 - 1</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <img src={i9} alt="Additional verification" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <img src={i10} alt="Confirmation step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <img src={i11} alt="Final confirmation" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <img src={i12} alt="Process complete" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>
                  </div>
                </section>

              </>
            )}

            {selectedOption === "cheque" && (
              <section>
                <div className="text-center py-12">
                  <p className="text-lg text-indigo-700">Cheque payment method coming soon...</p>
                </div>
              </section>
            )}

            {selectedOption === "account" && (
              <section>
                <div className="text-center py-12">
                  <p className="text-lg text-indigo-700">Account payment method coming soon...</p>
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

export default Procedure0025;