import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0019-1.png'
import i2 from './0019-2.png'
import i3 from './0019-3.png'
import i4 from './0019-4.png'
import i5 from './0019-5.png'
import i6 from './0019-6.png'

function Procedure0019() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Unregistered Bill</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Locate the amount to pay</h2>
              <div className="text-lg text-indigo-700">
                <img src={i5} alt="Bill Amount" className="rounded-lg object-cover w-full shadow-lg mb-4" />
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="CBFE Step 1" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i2} alt="CBFE Step 2" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i3} alt="CBFE Step 3" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i4} alt="CBFE Step 4" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Stamp the back of the CRA slip</p>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Final Step</h2>
              <div className="text-lg text-indigo-700">
                <img src={i6} alt="Final Document" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                <p>Keep the CRA slip for settlement draft for closing (ie the bottom part of the CRA bill paper)</p>
              </div>
            </section>
          </div>
          <div className="h-48" />
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0019;