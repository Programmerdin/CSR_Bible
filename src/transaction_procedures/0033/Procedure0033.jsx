import React, { useState } from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';

import i0 from './0033-0.png'
import i1 from './0033-1.png'



function Procedure0033() {


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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Set up 3270</h1>
          <div className="space-y-12">
            <section>
              <div>
                <p className="text-lg text-indigo-800 mb-4">procedure is incomplete at this time</p>
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Start 3270</h2>
                <img src={i1} className="rounded-lg object-cover w-full shadow-lg mb-8" />
                <img src={i0} className="rounded-lg object-cover w-full shadow-lg mb-8" />
              </div>
            </section>


          </div>
          <div className="h-48" /> {/* Spacing at bottom for scrolling */}
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0033;