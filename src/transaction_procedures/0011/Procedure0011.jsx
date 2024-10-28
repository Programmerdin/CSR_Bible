import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0011-1.png'
import i2 from './0011-2.png'
import i3 from './0011-3.png'
import i4 from './0011-4.png'
import i5 from './0011-5.png'

function Procedure0011() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Deposit USD Cheque to USD Account</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="CBFE Initial" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>Function: Deposit</li>
                    <li>Select Client's USD account</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i2} alt="CBFE Amount" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>Press Go</li>
                    <li>Type the USD amount in the amount field and number of instruments</li>
                    <li>Press Update</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i3} alt="CBFE Selection" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Always select Courier/Armoured Car</p>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 11 - 2</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i4} alt="COINS Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>RATE SOURCE: 1</li>
                    <li>Once filled, Press F1</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i5} alt="Final Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Press F6 and insert paper into printer</p>
                </div>
              </div>
            </section>
          </div>
          <div className="h-48" />
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0011;