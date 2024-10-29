import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0023-1.png'
import i2 from './0023-2.png'

function Procedure0023() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Pay U Bill with Cheque/Instrument</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="Scan the cheque" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Scan the cheque</p>
                </div>
              </div>
            </section>


            <section>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i2} alt="Preparation Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Comment is not needed but makes customer feel like their u bill is being paid properly</p>
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

export default Procedure0023;
