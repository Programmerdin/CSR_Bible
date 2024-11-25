import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Home, Building2 } from 'lucide-react'
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0007-1.png'
import i2 from './0007-2.png'
import i3 from './0007-3.png'
import i4 from './0007-4.png'
import i5 from './0007-5.png'
import i6 from './0007-6.png'
import i7 from './0007-7.png'
import i8 from './0007-8.png'
import i2hpp from './HPP/0007-hpp-2.png'
import i4hpp from './HPP/0007-hpp-4.png'

function Procedure0007() {
  const [selectedOption, setSelectedOption] = useState("mortgage")

  const payoutOptions = [
    { id: "mortgage", title: "Mortgage", icon: Building2 },
    { id: "hpp", title: "HPP", icon: Home },
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Mortgage Payout</h1>

          <div className="space-y-12">
            <section>
              <p className="text-lg text-indigo-700 mb-2">HPP will have a small table with Line of Credit amount in one of the pages of payout statement. Ask your supervisor if you are unsure of which type of payout it is.</p>

              <p className="text-lg font-medium text-indigo-700 mb-2">Select Payout Type:</p>
              <div className="space-y-2 px-1">
                <div className="grid grid-cols-2 gap-2">
                  {payoutOptions.map((option) => (
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

            {selectedOption === "mortgage" && (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <p className="mt-2">Search by Mortgage Number</p>
                      <img src={i1} alt="Search Screen" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i2} alt="Mortgage Number Entry" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <ul className="space-y-2">
                        <li>Mortage Numbers typically end with ".1"</li>
                        <li>Type out the Mortgage Number without "."</li>
                      </ul>
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i3} alt="Function Selection" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <ul className="space-y-2">
                        <li>Function: Deposit</li>
                        <li>To: select Mortgage Account</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <Separator className="bg-indigo-200" />

                <section>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <img src={i4} alt="Scanning Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <p className="mt-2">Scan cheque/draft</p>
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i5} alt="Post Screen" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i6} alt="Payment Reason" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <p className="mt-2">Payment Reason: Payout</p>
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i7} alt="Confirmation" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <p className="mt-2">Press OK</p>
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i8} alt="Print Screen" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <p className="mt-2">Print Branch Copy</p>
                    </div>
                  </div>
                </section>
              </>
            )}

            {selectedOption === "hpp" && (
              <>
              <section>
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
                <div className="space-y-6">
                  <div className="text-lg text-indigo-700">
                    <p className="mt-2">Find Client Profile (you can use mortage number to find client profile)</p>
                    <img src={i2hpp} alt="Search Screen" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i4} alt="Client Profile" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i5} className='rounded-lg object-cover w-full shadow-lg mb-4' />
                    <img src={i4hpp} alt="Client Profile" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  </div>

                  <div className="text-lg text-indigo-700">
                    <img src={i8} alt="Print Screen" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  </div>

                </div>
              </section>
            </>
            )}
          </div>
          <div className="h-48" /> {/* Spacing at bottom for scrolling */}
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0007;