import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './USD/0005-1.png'
import i2 from './USD/0005-2.png'
import i3 from './USD/0005-3.png'
import i4 from './USD/0005-4.png'
import i5 from './USD/0005-5.png'
import i6 from './USD/0005-6.png'
import i7 from './USD/0005-7.png'
import i8 from './USD/0005-8.png'
import i1allother from './AllOther/0005-allother-1.png'
import i2allother from './AllOther/0005-allother-2.png'
import i3allother from './AllOther/0005-allother-3.png'
import i4allother from './AllOther/0005-allother-4.png'
import i5allother from './AllOther/0005-allother-5.png'
import i6allother from './AllOther/0005-allother-6.png'


function Procedure0005() {
  const [selectedOption, setSelectedOption] = useState('usd');

  const chequeOptions = [
    { 
      id: "usd", 
      title: "USD Cheques",
    },
    { 
      id: "foreign", 
      title: "All Other Foreign Currency Cheques",

    },
  ];

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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Outgoing C-List for USD/Foreign Cheques (Closing)</h1>

          <div className="space-y-12">
            <section>
              <div className="space-y-2 px-1">
                <div className="grid grid-cols-2 gap-4">
                  {chequeOptions.map((option) => (
                    <div key={option.id} className="flex flex-col space-y-2">
                      <Button
                        variant={selectedOption === option.id ? "default" : "outline"}
                        className={`h-auto py-1.5 px-3 flex items-center justify-center space-x-2 text-left transition-all duration-200 ease-in-out origin-center ${
                          selectedOption === option.id 
                            ? 'bg-indigo-600 text-white shadow-lg scale-[1.02] hover:bg-indigo-700' 
                            : 'bg-white text-indigo-600 hover:bg-indigo-100 hover:scale-[1.01] hover:shadow-md active:bg-indigo-200'
                        } rounded-lg border-2 border-indigo-200`}
                        onClick={() => setSelectedOption(option.id)}
                      >
                        <span className="font-medium text-sm whitespace-nowrap">{option.title}</span>
                      </Button>
                      <p className="text-xs text-indigo-600 text-center px-2">{option.description}</p>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {selectedOption === 'usd' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 11 - 4</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                    <ul className="space-y-2">
                        <li>Find the list with USD and type in the number</li>
                      </ul>
                      <img src={i1} alt="Initial Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i2} alt="F7 Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i3} alt="Form Check" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <p className="mt-2">Find USD Cheque List form and Serial Number on it</p>
                    </div>
                  </div>
                </section>

                <Separator className="bg-indigo-200" />

                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Processing Details</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <img src={i4} alt="Details Entry" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <ul className="space-y-2">
                        <li>SERIAL #...: Type in Serial Number</li>
                        <li>FOREIGN AMT: Add up all amounts on USD cheques you have</li>
                        <li>CLEARING TO: 2</li>
                        <li>Press Enter</li>
                      </ul>
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i5} alt="Printing Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <ul className="space-y-2">
                        <li>Type in the number of your added C/List and Press F1</li>
                        <li>Insert USD Cheque List form into printer</li>
                        <li>Once printed, tear the two pages apart</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <Separator className="bg-indigo-200" />

                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <img src={i6} alt="CBFE Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <p className="mt-2">Scan all your USD cheques and the top page of USD Cheque List form</p>
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i7} alt="Amount Edit" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                      <p className="mt-2">Manually edit the USD C-List amount to the amount on USD Cheque List form</p>
                    </div>

                    <div className="text-lg text-indigo-700">
                      <img src={i8} alt="Final Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    </div>
                  </div>
                </section>

                <Separator className="bg-indigo-200" />

                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Final Steps</h2>
                  <div className="space-y-6">
                    <div className="text-lg text-indigo-700">
                      <ul className="space-y-2">
                        <li>Put all of your USD cheques and the top page of USD Cheque List form together with a paper clip</li>
                        <li>Then, put it in the cheque bag where all the scanned cheques go</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {selectedOption === 'foreign' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 11 - 4</h2>
                  <div className="text-lg text-indigo-700">
                    <p className="mb-2">Find the list with the foreign currency and type in the number</p>
                    <img src={i1allother} alt="Initial Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i2allother} alt="F7 Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <p className="mb-2">Find the Serial Number on the foreign currency cheque list form</p>
                    <img src={i3allother} alt="F7 Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <p className="mb-2">Type in the Serial Number, the total amount of foreign cheques in that particular currency, Clearing to: 1</p>
                    <img src={i4allother} alt="Form Check" className="rounded-lg object-cover w-full shadow-lg mb-4" /> 
                    <img src={i5allother} alt="Printing Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <p className="mb-2">Insert foreign currency cheque list form into printer</p>
                    <p className="mb-2">Once printed, tear the top page off and put it in the envelope below with the foreign currency cheques</p>
                    <img src={i6allother} alt="CBFE Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <p className="mb-2">Place this envelope in the cheque bag</p>
                  </div>
                </section>
              </div>
            )}
          </div>
          <div className="h-48" /> {/* Spacing at bottom for scrolling */}

        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0005;