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
import i7_USDparcelIn from './USDparcelin/parcel-in-usd-7.png'
import i8_USDparcelIn from './USDparcelin/parcel-in-usd-8.png'

import i1_CADparcelOut from './CADparcelout/CADparcelout-1.png'
import i2_CADparcelOut from './CADparcelout/CADparcelout-2.png'
import i3_CADparcelOut from './CADparcelout/CADparcelout-3.png'
import i4_CADparcelOut from './CADparcelout/CADparcelout-4.png'
import i5_CADparcelOut from './CADparcelout/CADparcelout-5.png'
import i6_CADparcelOut from './CADparcelout/CADparcelout-6.png'
import i7_CADparcelOut from './CADparcelout/CADparcelout-7.png'
import i8_CADparcelOut from './CADparcelout/CADparcelout-8.png'
import i9_CADparcelOut from './CADparcelout/CADparcelout-9.png'
import i10_CADparcelOut from './CADparcelout/CADparcelout-10.png'
import i11_CADparcelOut from './CADparcelout/CADparcelout-11.png'
import i12_CADparcelOut from './CADparcelout/CADparcelout-12.png'
import i13_CADparcelOut from './CADparcelout/CADparcelout-13.png'
import i14_CADparcelOut from './CADparcelout/CADparcelout-14.png'
import i15_CADparcelOut from './CADparcelout/CADparcelout-15.png'
import i16_CADparcelOut from './CADparcelout/CADparcelout-16.png'
import i17_CADparcelOut from './CADparcelout/CADparcelout-17.png'
import i18_CADparcelOut from './CADparcelout/CADparcelout-18.png'
import i19_CADparcelOut from './CADparcelout/CADparcelout-19.png'

import i1_USDparcelOut from './USDparcelout/USDparcelout-1.png'
import i2_USDparcelOut from './USDparcelout/USDparcelout-2.png'
import i3_USDparcelOut from './USDparcelout/USDparcelout-3.png'
import i4_USDparcelOut from './USDparcelout/USDparcelout-4.png'
import i5_USDparcelOut from './USDparcelout/USDparcelout-5.png'
import i6_USDparcelOut from './USDparcelout/USDparcelout-6.png'
import i7_USDparcelOut from './USDparcelout/USDparcelout-7.png'
import i8_USDparcelOut from './USDparcelout/USDparcelout-8.png'
import i9_USDparcelOut from './USDparcelout/USDparcelout-9.png'
import i10_USDparcelOut from './USDparcelout/USDparcelout-10.png'
import i11_USDparcelOut from './USDparcelout/USDparcelout-11.png'
import i12_USDparcelOut from './USDparcelout/USDparcelout-12.png'



function Procedure0030() {
  const [selectedOption, setSelectedOption] = useState('cad-in');

  const parcelOptions = [
    { 
      id: "cad-in", 
      title: "CAD Parcel In",
      description: "Receive CAD cash from Parcel"
    },
    { 
      id: "cad-out", 
      title: "CAD Parcel Out",
      description: "Ship out CAD cash"
    },
    { 
      id: "usd-in", 
      title: "USD Parcel In",
      description: "Receive USD cash from Parcel"
    },
    { 
      id: "usd-out", 
      title: "USD Parcel Out",
      description: "Ship out USD cash"
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Parcel</h1>

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
                  <h2 className="text-3xl font-semibold text-indigo-800 mb-4">CAD Parcel In</h2>
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
                <h2 className="text-3xl font-semibold text-indigo-800 mb-4">CAD Parcel Out</h2>
                <div className="text-lg text-indigo-700">
                  <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Get a Parcel bag</h3>
                  <img src={i2_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <Separator className="my-10 bg-indigo-200" />

                  <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Money Manager</h3>
                  <p className="text-lg text-indigo-700">Copy and paste the link in your Chrome browser to open Money Manager https://cibc.mmnap.cs.garda.com/WebPortal/login_page.action</p>
                  <p className="text-lg text-indigo-700 mb-2">Log into Money Manager</p>
                  <img src={i1_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <p className="text-lg text-indigo-700">Bag No. can be found on top of the parcel bag</p>
                  <img src={i3_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <img src={i4_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <p className="text-lg text-indigo-700">Amount for each denomination of cash has to be in multiple of their bundle/box amount</p>
                  <img src={i5_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <img src={i6_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <img src={i7_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <img src={i8_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <p className="text-lg text-indigo-700">Print out Shipping Label</p>
                  <img src={i9_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <Separator className="my-10 bg-indigo-200" />

                  <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Preparing the Parcel Bag</h3>
                  <p className="text-lg text-indigo-700">Fold Shipping Label into 3rds and put it on the back of the parcel bag in the clear plastic section</p>
                  <img src={i10_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <img src={i11_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <p className="text-lg text-indigo-700">Rip off the liner and seal the clear plastic section</p>
                  <img src={i12_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <Separator className="my-10 bg-indigo-200" />

                  <h3 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h3>
                  <img src={i13_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <img src={i14_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <img src={i15_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <Separator className="my-10 bg-indigo-200" />

                  <h3 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 1 - 18</h3>
                  <img src={i16_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <img src={i17_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <Separator className="my-10 bg-indigo-200" />

                  <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Writing on Parcel Bag</h3>
                  <img src={i18_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <p className="text-lg text-indigo-700">Example</p>
                  <img src={i19_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  <Separator className="my-10 bg-indigo-200" />

                  <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Shipping out the Parcel</h3>
                  <p className="text-lg text-indigo-700">Bring the parcel bag and the cash to the room where your branch ships out parcels with your manager</p>

                </div>
              </section>
            </div>
            )}

            {selectedOption === 'usd-in' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-semibold text-indigo-800 mb-4">USD Parcel In</h2>
                  <div className="text-lg text-indigo-700">
                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h3>
                    <img src={i1_USDparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i7_USDparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <p className="text-lg text-indigo-700">Rate: rate written on the parcel packaging (see image above)</p>
                    <img src={i2_USDparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i3_USDparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i4_USDparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-2" />

                    <Separator className="my-10 bg-indigo-200" />
                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 1 - 18</h3>
                    <p className="text-lg text-indigo-700">Other transit: Other transit will depend on the location of your branch. Ask your supervisor if you're not sure.</p>
                    <p className="text-lg text-indigo-700">Other date: date written on the parcel packaging</p>
                    <img src={i8_USDparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i5_USDparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i6_USDparcelIn} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                  </div>
                </section>
              </div>
            )}

            {selectedOption === 'usd-out' && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-semibold text-indigo-800 mb-4">USD Parcel Out</h2>
                  <div className="text-lg text-indigo-700">
                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Get a Parcel bag</h3>
                    <img src={i2_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <Separator className="my-10 bg-indigo-200" />

                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Money Manager</h3>
                    <p className="text-lg text-indigo-700">Copy and paste the link in your Chrome browser to open Money Manager https://cibc.mmnap.cs.garda.com/WebPortal/login_page.action</p>
                    <p className="text-lg text-indigo-700 mb-2">Log into Money Manager</p>
                    <img src={i1_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <p className="text-lg text-indigo-700">Bag No. can be found on top of the parcel bag</p>
                    <img src={i3_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i1_USDparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <p className="text-lg text-indigo-700">Amount for each denomination of cash has to be in multiple of their bundle/box amount</p>
                    <img src={i5_USDparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i2_USDparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i3_USDparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i4_USDparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <p className="text-lg text-indigo-700">Print out Shipping Label</p>
                    <img src={i9_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <Separator className="my-10 bg-indigo-200" />

                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Preparing the Parcel Bag</h3>
                    <p className="text-lg text-indigo-700">Fold Shipping Label into 3rds and put it on the back of the parcel bag in the clear plastic section</p>
                    <img src={i10_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i11_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <p className="text-lg text-indigo-700">Rip off the liner and seal the clear plastic section</p>
                    <img src={i12_CADparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <Separator className="my-10 bg-indigo-200" />

                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h3>
                    <img src={i6_USDparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i7_USDparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i8_USDparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <Separator className="my-10 bg-indigo-200" />

                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 1 - 18</h3>
                    <img src={i9_USDparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <img src={i10_USDparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <Separator className="my-10 bg-indigo-200" />

                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Writing on Parcel Bag</h3>
                    <img src={i11_USDparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <p className="text-lg text-indigo-700">Example</p>
                    <img src={i12_USDparcelOut} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                    <Separator className="my-10 bg-indigo-200" />

                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Shipping out the Parcel</h3>
                    <p className="text-lg text-indigo-700">Bring the parcel bag and the cash to the room where your branch ships out parcels with your manager</p>
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