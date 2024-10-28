import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0001-1.png'
import i2 from './0001-2.png'
import i3 from './0001-3.png'
import i4 from './0001-4.png'
import i5 from './0001-5.png'
import i6 from './0001-6.png'
import i7 from './0001-7.png'
import i8 from './0001-8.png'
import i9 from './0001-9.png'

function Procedure0001() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Bank Draft in CAD</h1>

          

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 12 - 1 - 1</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>PAY TO THE ORDER OF: Name of Beneficiary</li>
                    <li>AMT. : Type in amount in CAD</li>
                    <li>NAME OF REMITTER: Copy & Paste client's name from CBFE</li>
                    <li>SOURCE OF FUNDS: 1</li>
                    <li>TR/ACCT: Type in client's CAD account info</li>
                    <li>Press ENTER</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Processing Steps</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i2} alt="Processing Step 1" className="rounded-lg object-cover w-full shadow-lg mb-2" />
                  <p className="mt-2">Press ENTER</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i3} alt="Processing Step 2" className="rounded-lg object-cover w-full shadow-lg mb-2" />
                  <p className="mt-2">Press F1</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i4} alt="Processing Step 3" className="rounded-lg object-cover w-full shadow-lg mb-2" />
                  <p className="mt-2">Get Override</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i5} alt="Processing Step 4" className="rounded-lg object-cover w-full shadow-lg mb-2" />
                  <p className="mt-2">Choose the printer for Drafts</p>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Printing Debit Slip and Signatures</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i6} alt="Printing Step 1" className="rounded-lg object-cover w-full shadow-lg mb-2" />
                  <p className="mt-2">Press F1 or ENTER to print Debit Slip</p>
                  <p className="mt-2">Insert Double Debit Slip into the printer (shown below)</p>
                  <img src={i8} alt="Debit Slip" className="rounded-lg object-cover w-full shadow-lg mt-4" />
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i7} alt="Final Document 1" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <img src={i9} alt="Final Document 2" className="rounded-lg object-cover w-full shadow-lg mb-2" />
                  <p className="mt-2">Get Client's signature on Draft and Debit slip</p>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Final Steps</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <h3 className="font-semibold mb-2">Draft Paper Separation:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Tear off Printed Draft paper into 3 separate pieces:</li>
                    <li className="ml-6">Top: Actual Bank Draft</li>
                    <li className="ml-6">Middle: Client Copy</li>
                    <li className="ml-6">Bottom: Branch Copy</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <h3 className="font-semibold mb-2">Debit Slip Handling:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Tear off Printed Debit Slip into 2 pieces</li>
                    <li>Staple together one of the debit slip with Client Copy of Draft</li>
                    <li>Staple together the other piece of debit slip with Branch Copy of Draft</li>
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

export default Procedure0001;
