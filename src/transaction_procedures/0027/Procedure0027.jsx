import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import { Button } from "@/components/ui/button"
import { CreditCard, AlertTriangle, Ban } from 'lucide-react'
import i1 from './OrderReplacement/0027-orderreplacement-1.png'
import i2 from './OrderReplacement/0027-orderreplacement-2.png'
import i3 from './OrderReplacement/0027-orderreplacement-3.png'
import i4 from './OrderReplacement/0027-orderreplacement-4.png'
import i1replace from './Replace/0027-1.png'
import i2replace from './Replace/0027-2.png'
import i3replace from './Replace/0027-3.png'
import i4replace from './Replace/0027-4.png'
import i5replace from './Replace/0027-5.png'
import i6replace from './Replace/0027-6.png'

function Procedure0027() {
  const [selectedOption, setSelectedOption] = useState('new');

  const cardOptions = [
    { 
      id: "new", 
      title: "Order Replacement Card", 
      icon: CreditCard,
      description: "Keep the same debit card number, deliver card to client's home address in 1-2 weeks"
    },
    { 
      id: "lost", 
      title: "Issue/Replace Card", 
      icon: AlertTriangle,
      description: "Issue a debit card now with a different debit card number"
    },
    { 
      id: "damaged",
      title: "Issue New Card",
      icon: Ban,
      description: "Issue a brand new debit card for a brand new client (use other two options unless you know what you're doing)"
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Issue/Replace Debit Card</h1>

          <div className="space-y-12">
            <section>
              <p className="text-lg font-medium text-indigo-700 mb-2">Select Card Issue Type:</p>
              <div className="space-y-2 px-1">
                <div className="grid grid-cols-3 gap-4">
                  {cardOptions.map((option) => (
                    <div key={option.id} className="flex flex-col space-y-2">
                      <Button
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
                      <p className="text-xs text-indigo-600 text-center px-2">{option.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-indigo-700">I recommend using the "Order Replacement Card" option and only using the "Issue/Replace Card" option if the client needs a debit card now</p>
                <Separator className="my-6 bg-indigo-200" />
              </div>

              {selectedOption && (
                <div className="mt-8 space-y-4">
                  <div className="prose prose-indigo">
                    {selectedOption === 'new' && (
                      <div className='space-y-4'>
                        <h2 className="text-2xl font-semibold text-indigo-800">Order Replacement Debit Card</h2>
                          <div className="text-lg text-indigo-700 mb-2">
                            <img src={i1} className="rounded-lg object-cover w-full shadow-lg mb-6" />
                            <img src={i2} className="rounded-lg object-cover w-full shadow-lg mb-6" />
                            <img src={i3} className="rounded-lg object-cover w-full shadow-lg mb-6" />
                            <img src={i4} className="rounded-lg object-cover w-full shadow-lg mb-6" />
                          </div>
                      </div>
                    )}
                    {selectedOption === 'lost' && (
                      <div>
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-2">Issue/Replace Card</h2>
                        <div className='space-y-4'>
                          <p className="text-lg text-indigo-700">Sign out and grab a debit card from your branch's debit card pile</p>
                          <p className='text-lg text-indigo-700'>If the client doesn't have a debit card (typically because they lost it), find the client's current debit card number from ECIF</p>
                          <p className="text-lg text-indigo-700">If the client has their debit with them, scroll down to the COINS 21 - 4 section</p>
                          <h3 className="text-xl font-semibold text-indigo-800">ECIF</h3>
                          <img src={i1replace} className="rounded-lg object-cover w-full shadow-lg mb-6" />
                          <img src={i6replace} className='rounded-lg object-cover w-full shadow-lg mb-6' />
                        </div>
                        <Separator className="my-6 bg-indigo-200" />
                        <div className='space-y-4'>
                          <h3 className="text-xl font-semibold text-indigo-800">COINS 21 - 4</h3>
                          <p className="text-lg text-indigo-700">if the client has their debit with them, just type in their debit card number. If client doesn't have their debit card with them paste in (Ctrl+v) their debit card number we got from client's ECIF</p>
                          <img src={i2replace} className="rounded-lg object-cover w-full shadow-lg mb-6" />
                          <p className="text-lg text-indigo-700">This will bring up an ECIF window. Confirm it is the right client profile</p>
                          <img src={i3replace} className="rounded-lg object-cover w-full shadow-lg mb-6" />
                          <img src={i4replace} className="rounded-lg object-cover w-full shadow-lg mb-6" />
                          <p className="text-lg text-indigo-700">Select the reason for replacement, if you're not sure just go with "L"</p>
                          <img src={i5replace} className="rounded-lg object-cover w-full shadow-lg mb-6" />
                        </div>
                      </div>
                    )}
                    {selectedOption === 'damaged' && (
                      <div>
                        <h2 className="text-2xl font-semibold text-indigo-800">Issue New Card</h2>
                        <p className='text-lg text-indigo-700'>Coming Soon..</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </section>
          </div>
          <div className="h-48" /> {/* Spacing at bottom for scrolling */}
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0027;