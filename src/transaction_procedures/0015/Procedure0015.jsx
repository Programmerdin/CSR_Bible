import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0015-1.png'
import i2 from './0015-2.png'
import i3 from './0015-3.png'
import i4 from './0015-4.png'
import i5 from './0015-5.png'

function Procedure0015() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Find Client's Advisor</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="Portfolio Number" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Copy Portfolio Number</p>
                  <p className="text-sm italic">*In this case Portfolio Number is 37200</p>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 9 - 2</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i2} alt="Enter Portfolio" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>Type in Portfolio Number</li>
                    <li>Press ENTER</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i3} alt="Advisor ID" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Copy Advisor's COINS ID</p>
                  <p className="text-sm italic">*In this case Advisor's COINS ID is WC00406</p>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Teams / Outlook</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i4} alt="Teams Search" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <img src={i5} alt="Outlook Search" className="rounded-lg object-cover w-full shadow-lg mb-4" />
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

export default Procedure0015;