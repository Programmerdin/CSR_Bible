import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0007-1.png'
import i2 from './0007-2.png'
import i3 from './0007-3.png'
import i4 from './0007-4.png'
import i5 from './0007-5.png'
import i6 from './0007-6.png'
import i7 from './0007-7.png'
import i8 from './0007-8.png'

function Procedure0007() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Mortgage Payout</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE Process</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="Search Screen" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Search by Mortgage Number</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i2} alt="Mortgage Number Entry" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>Mortage Numbers typically end with ".1"</li>
                    <li>Type out the Mortgage Number without "."</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i3} alt="Function Selection" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>Function: Deposit</li>
                    <li>To: select Mortgage Account</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Processing Steps</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i4} alt="Scanning Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Scan cheque/draft</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i5} alt="Post Screen" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Press Post</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i6} alt="Payment Reason" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Payment Reason: Payout</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i7} alt="Confirmation" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Press OK</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i8} alt="Print Screen" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Print Branch Copy</p>
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

export default Procedure0007;