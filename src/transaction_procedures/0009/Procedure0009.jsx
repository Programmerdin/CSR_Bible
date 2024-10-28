import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0009-1.png'
import i2 from './0009-2.png'

function Procedure0009() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Change Account Statement Type</h1>
          <p className="text-xl text-indigo-700 mb-6 text-center">(Mail/eStatement/Mailing Frequency)</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 25 - 3 & Account Number - 7</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="Initial Screen" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Press ENTER</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <p className="mt-2">Keep pressing ENTER until the account is updated successfully</p>
                  <img src={i2} alt="Final Screen" className="rounded-lg object-cover w-full shadow-lg mb-4" />
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

export default Procedure0009;