import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { CreditCard, Banknote } from 'lucide-react'
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0019-1.png'
import i2 from './0019-2.png'
import i3 from './0019-3.png'
import i4 from './0019-4.png'
import i5 from './0019-5.png'
import i6 from './0019-6.png'
import c1 from './0019-7.png'
import c2 from './0019-8.png'

function Procedure0019() {
  const [selectedOption, setSelectedOption] = useState("account")

  const options = [
    { id: "account", title: "Pay with Account", icon: CreditCard },
    { id: "cheque", title: "Pay with Cheque", icon: Banknote },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-4 sm:p-6 md:p-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="fixed top-4 left-4 z-10">
          <BackButton />
        </div>
        <div className="fixed top-4 right-4 z-10">
          <SaveProcedureButton />
        </div>
        
        <ScrollAreaNoBar className="h-[calc(100vh-32px)]">
          <div className="px-4">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4 mt-16 text-center">Pay Unregistered Bill (aka U Bill)</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {options.map((option) => (
                <Button
                  key={option.id}
                  variant={selectedOption === option.id ? "default" : "outline"}
                  className={`focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 px-6 flex items-center justify-start space-x-3 text-left transition-all duration-200 ease-in-out ${
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

            {selectedOption === "account" ? (
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Locate the amount to pay</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <p className="mb-2">Locate the amount to pay</p>
                      <img src={i5} alt="Bill Amount" className="rounded-md object-cover w-full shadow-md" />
                    </div>
                  </div>
                </section>

                <Separator className="bg-indigo-200" />

                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE Process</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <p className="mb-2">Enter payment details</p>
                      <img src={i1} alt="CBFE Step 1" className="rounded-md object-cover w-full shadow-md" />
                    </div>
                    <div className="text-lg text-indigo-700">
                      <p className="mb-2">Verify information</p>
                      <img src={i2} alt="CBFE Step 2" className="rounded-md object-cover w-full shadow-md" />
                    </div>
                    <div className="text-lg text-indigo-700">
                      <p className="mb-2">Process payment</p>
                      <img src={i3} alt="CBFE Step 3" className="rounded-md object-cover w-full shadow-md" />
                    </div>
                    <div className="text-lg text-indigo-700">
                      <p className="mb-2">Complete transaction</p>
                      <img src={i4} alt="CBFE Step 4" className="rounded-md object-cover w-full shadow-md" />
                      <p className="mt-2 text-sm text-indigo-600">Stamp the back of the CRA slip</p>
                    </div>
                  </div>
                </section>

                <Separator className="bg-indigo-200" />

                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Completion</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <p className="mb-2">File documentation</p>
                      <img src={i6} alt="Final Document" className="rounded-md object-cover w-full shadow-md" />
                      <p className="mt-2 text-sm text-indigo-600">
                        Keep the CRA slip for settlement draft for closing (ie the bottom part of the CRA bill paper)
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE Process</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <p className="mb-2">Scan the cheque</p>
                      <img src={c1} alt="Scan the cheque" className="rounded-md object-cover w-full shadow-md" />
                    </div>
                  </div>
                </section>

                <Separator className="bg-indigo-200" />

                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Completion</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <p className="mb-2">Add payment details</p>
                      <img src={c2} alt="Preparation Step" className="rounded-md object-cover w-full shadow-md" />
                      <p className="mt-2 text-sm text-indigo-600">
                        Comment is not needed but makes customer feel like their u bill is being paid properly
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0019;
