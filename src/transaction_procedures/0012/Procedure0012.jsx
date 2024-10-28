import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0012-1.png'
import i2 from './0012-2.png'
import i3 from './0012-3.png'

function Procedure0012() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Close Account (Chequing, Saving, USD Accounts)</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
              <div className="text-lg text-indigo-700">
                <img src={i3} alt="Account Balance" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                <ul className="space-y-2">
                  <li>Ensure account balance is "0"</li>
                  <li>Account closing will not work on Saturdays (being future dated on Friday afternoon) & non-business days</li>
                </ul>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Closing Process</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="Function Selection" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Function: Debits/Credits</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i2} alt="Close Account" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>Function: Close Account</li>
                    <li>Transit/Account: Select the account to be closed</li>
                    <li>Make sure "Outstanding entries ...." box is checked</li>
                    <li>Press Close Account</li>
                  </ul>
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

export default Procedure0012;