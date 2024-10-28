import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0006-1.png'
import i2 from './0006-2.png'
import i3 from './0006-3.png'
import i4 from './0006-4.png'
import i5 from './0006-5.png'

function Procedure0006() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Settlement Draft for U Bill (Closing)</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 12 - 2</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i2} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Once filled, Press ENTER</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i3} alt="Processing Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Press F1</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i4} alt="Override Screen" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Get Override</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i5} alt="Printer Selection" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Choose the printer for Drafts</p>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Final Steps</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <ul className="space-y-2">
                    <li>Put the Settlement draft and U bill slips together into an envelope</li>
                    <li>Put the envelope into the bag where all the cheques go</li>
                  </ul>
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

export default Procedure0006;