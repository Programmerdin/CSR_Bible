import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0028-1.png'
import i2 from './0028-2.png'
import i3 from './0028-3.png'
import i4 from './0028-4.png'


function Procedure0028() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Simplii Bank Draft</h1>

          <div className="space-y-12 text-lg text-indigo-700">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 11 - 14</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="ECIF Step 1" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <img src={i2} alt="ECIF Step 2" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <img src={i3} alt="ECIF Step 3" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <img src={i4} alt="ECIF Step 4" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                </div>
              </div>
            </section>
          </div>
          <div className="h-48" /> {/* Spacing at bottom for scrolling */}
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0028;