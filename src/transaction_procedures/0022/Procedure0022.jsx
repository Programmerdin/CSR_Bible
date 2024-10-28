import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0022-1.png'
import i2 from './0022-2.png'
import i3 from './0022-3.png'
import i4 from './0022-4.png'
import i5 from './0022-5.png'
import i6 from './0022-6.png'
import i7 from './0022-7.png'
import i8 from './0022-8.png'
import i9 from './0022-9.png'
import i10 from './0022-10.png'
import i11 from './0022-11.png'
import i12 from './0022-12.png'

function Procedure0022() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">How to Close</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Make sure the two numbers from CBFE and COINS are equal</h2>

            </section>


            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE Check</h2>
              <div className="text-lg text-indigo-700">
                <img src={i4} alt="CBFE Numbers" className="rounded-lg object-cover w-full shadow-lg mb-4" />
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 11 - 8 - 4</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="Initial Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Printing Process</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i2} alt="CBFE Print" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <img src={i3} alt="Print Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Insert A4 paper into printer</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i7} alt="Paper Wrap 1" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Wrap your cheque in the printed A4 paper</p>
                  <img src={i8} alt="Wrapped Cheque 1" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i11} alt="Second Print" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Insert A4 paper into printer</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i9} alt="Paper Wrap 2" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Wrap your cheque in the printed A4 paper</p>
                  <img src={i10} alt="Wrapped Cheque 2" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Final Steps</h2>
              <div className="text-lg text-indigo-700">
                <img src={i12} alt="Final Step 1" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                <img src={i6} alt="Final Step 2" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                <img src={i5} alt="Close Session" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                <p>Select Close Session</p>
              </div>
            </section>
          </div>
          <div className="h-48" />
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0022;