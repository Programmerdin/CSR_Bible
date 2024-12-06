import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';

import i1_cad from './CADcashorder/CADcashorder-1.png'
import i2_cad from './CADcashorder/CADcashorder-2.png'
import i3_cad from './CADcashorder/CADcashorder-3.png'
import i4_cad from './CADcashorder/CADcashorder-4.png'
import i5_cad from './CADcashorder/CADcashorder-5.png'
import i6_cad from './CADcashorder/CADcashorder-6.png'
import i7_cad from './CADcashorder/CADcashorder-7.png'
import i8_cad from './CADcashorder/CADcashorder-8.png'

import i1_usd from './USDcashorder/USDcashorder-1.png'
import i2_usd from './USDcashorder/USDcashorder-2.png'
import i3_usd from './USDcashorder/USDcashorder-3.png'
import i4_usd from './USDcashorder/USDcashorder-4.png'
import i5_usd from './USDcashorder/USDcashorder-5.png'
import i6_usd from './USDcashorder/USDcashorder-6.png'



function Procedure0031() {
  const [selectedOption, setSelectedOption] = useState('cad-order');

  const parcelOptions = [
    { 
      id: "cad-order", 
      title: "Order CAD Cash",
    },
    { 
      id: "usd-order", 
      title: "Order USD Cash",
    }
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Order Cash for Branch</h1>

          <div className="space-y-12">
            <section>
              <p className="text-lg font-medium text-indigo-700 mb-2">Select Currency:</p>
              <div className="space-y-2 px-1">
                <div className="grid grid-cols-2 gap-4">
                  {parcelOptions.map((option) => (
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
                <Separator className="my-6 bg-indigo-200" />
              </div>
            </section>

            {selectedOption === 'cad-order' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Order CAD Cash</h2>
                  <div className="text-lg text-indigo-700">
                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Money Manager</h3>
                    <div className="mb-4">
                      <Button
                        variant="default"
                        className="bg-indigo-600 text-white hover:bg-indigo-700"
                        onClick={() => window.open('https://cibc.mmnap.cs.garda.com/WebPortal/login_page.action', '_blank', 'noopener,noreferrer')}
                      >
                        Click to Open Money Manager
                      </Button>
                    </div>
                    <p className="text-lg text-indigo-700">Log into Money Manager</p>
                    <img src={i8_cad} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i1_cad} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i2_cad} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i3_cad} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <p className="text-lg text-indigo-700 mb-2">Amount for each denomination of cash has to be in multiple of their bundle/box amount</p>
                    <img src={i7_cad} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i4_cad} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i5_cad} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i6_cad} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />

                  </div>
                </section>
              </div>
            )}

            {selectedOption === 'usd-order' && (
              <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-semibold text-indigo-800 mb-4">Order USD Cash</h2>
                <div className="text-lg text-indigo-700">
                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Money Manager</h3>
                    <div className="mb-4">
                      <Button
                        variant="default"
                        className="bg-indigo-600 text-white hover:bg-indigo-700"
                        onClick={() => window.open('https://cibc.mmnap.cs.garda.com/WebPortal/login_page.action', '_blank', 'noopener,noreferrer')}
                      >
                        Click to Open Money Manager
                      </Button>
                    </div>
                    <p className="text-lg text-indigo-700">Log into Money Manager</p>
                    <img src={i8_cad} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i1_cad} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i1_usd} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i2_usd} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <p className="text-lg text-indigo-700 mb-2">Amount for each denomination of cash has to be in multiple of their bundle/box amount</p>
                    <img src={i6_usd} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i3_usd} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i4_usd} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i5_usd} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
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

export default Procedure0031;