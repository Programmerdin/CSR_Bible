import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';

import i1 from './0035-1.png'
import i2 from './0035-2.png'
import i3 from './0035-3.png'
import i4 from './0035-4.png'
import i5 from './0035-5.png'
import i6 from './0035-6.png'
import i7 from './0035-7.png'
import i8 from './0035-8.png'


function Procedure0035() {

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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Order Foreign Currency for Client</h1>

          <div className="space-y-12">
            <section>
              <div>
                <p className="text-lg text-indigo-700 mb-2">The delivery can take upto 5 business days</p>

                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>


                <img src={i1} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <Separator className="my-10 bg-indigo-200" />

                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Order Foreign Cash</h2>
                <img src={i2} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i3} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i4} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i5} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i6} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i7} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i8} className="rounded-lg object-cover w-full shadow-lg mb-8" />

              </div>
            </section>

          </div>
          <div className="h-48" /> {/* Spacing at bottom for scrolling */}
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0035;