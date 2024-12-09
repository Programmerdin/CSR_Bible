import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import ProcedureLink from '../../components/ProcedureLink';

import i1 from './0034-1.png'
import i2 from './0034-2.png'
import i3 from './0034-3.png'
import i4 from './0034-4.png'
import i5 from './0034-5.png'
import i6 from './0034-6.png'
import i7 from './0034-7.png'
import i8 from './0034-8.png'
import i9 from './0034-9.png'
import i10 from './0034-10.png'
import i11 from './0034-11.png'
import i12 from './0034-12.png'
import i13 from './0034-13.png'

function Procedure0034() {

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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Order Class Work Bundle</h1>

          <div className="space-y-12">
            <section>
              <div>

                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">3270</h2>
                <p className="text-lg text-indigo-700 mb-2">If you've never used 3270 before, you'll need to set it up first.</p>
                <ProcedureLink 
                  procedureNumber="0033" 
                  buttonText="Set up 3270"
                />
                <p className="text-lg text-indigo-700 mt-8 mb-2">Open 3270</p>
                <img src={i1} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i2} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i3} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i4} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i5} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i6} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i7} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i8} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i9} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i10} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i11} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i12} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i13} className="rounded-lg object-cover w-full shadow-lg mb-8" />
              </div>
            </section>

          </div>
          <div className="h-48" /> {/* Spacing at bottom for scrolling */}
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0034;