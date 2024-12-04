import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';

import i1_CADparcelIn from './CADparcelin/parcel-in-cad-1.png'
import i2_CADparcelIn from './CADparcelin/parcel-in-cad-2.png'
import i3_CADparcelIn from './CADparcelin/parcel-in-cad-3.png'
import i4_CADparcelIn from './CADparcelin/parcel-in-cad-4.png'
import i5_CADparcelIn from './CADparcelin/parcel-in-cad-5.png'
import i6_CADparcelIn from './CADparcelin/parcel-in-cad-6.png'

import i1_USDparcelIn from './USDparcelin/parcel-in-usd-1.png'
import i2_USDparcelIn from './USDparcelin/parcel-in-usd-2.png'
import i3_USDparcelIn from './USDparcelin/parcel-in-usd-3.png'
import i4_USDparcelIn from './USDparcelin/parcel-in-usd-4.png'
import i5_USDparcelIn from './USDparcelin/parcel-in-usd-5.png'
import i6_USDparcelIn from './USDparcelin/parcel-in-usd-6.png'

function Procedure0030() {
  const [selectedOption, setSelectedOption] = useState('cad-in');

  const parcelOptions = [
    { 
      id: "cad-in", 
      title: "CAD Parcel In",
      description: "Process incoming CAD parcels"
    },
    { 
      id: "cad-out", 
      title: "CAD Parcel Out",
      description: "Process outgoing CAD parcels"
    },
    { 
      id: "usd-in", 
      title: "USD Parcel In",
      description: "Process incoming USD parcels"
    },
    { 
      id: "usd-out", 
      title: "USD Parcel Out",
      description: "Process outgoing USD parcels"
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Parcel Processing</h1>

          <div className="space-y-12">
            <section>
              <p className="text-lg font-medium text-indigo-700 mb-2">Select Parcel Type:</p>
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

            {selectedOption === 'cad-in' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-semibold text-indigo-800 mb-4">CAD Parcel In Process</h2>
                  <div className="text-lg text-indigo-700">
                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h3>
                    <img src={i1_CADparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i2_CADparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i3_CADparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    
                    <Separator className="my-10 bg-indigo-200" />
                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 1 - 18</h3>
                    <img src={i4_CADparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-2" />
                    <p className="text-lg text-indigo-700">Other transit: Other transit will depend on the location of your branch. Ask your supervisor if you're not sure.</p>
                    <p className="text-lg text-indigo-700">Other date: date written on the parcel packaging (see image below)</p>
                    <img src={i6_CADparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i5_CADparcelIn} className="rounded-lg object-cover w-full shadow-lg mt-8 mb-8" />
                  </div>
                </section>
              </div>
            )}

            {selectedOption === 'cad-out' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CAD Parcel Out Process</h2>
                  <div className="text-lg text-indigo-700">
                    <p>Content for processing outgoing CAD parcels will be added here.</p>
                  </div>
                </section>
              </div>
            )}

            {selectedOption === 'usd-in' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">USD Parcel In Process</h2>
                  <div className="text-lg text-indigo-700">
                    <p>Content for processing incoming USD parcels will be added here.</p>
                  </div>
                </section>
              </div>
            )}

            {selectedOption === 'usd-out' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-semibold text-indigo-800 mb-4">USD Parcel Out Process</h2>
                  <div className="text-lg text-indigo-700">
                    <p>Content for processing outgoing USD parcels will be added here.</p>
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

export default Procedure0030;