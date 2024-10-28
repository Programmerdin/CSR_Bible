import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0017-1.png'
import i2 from './0017-2.png'
import i3 from './0017-3.png'

function Procedure0017() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Close Safety Deposit Box</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Get client to empty their SDB & make sure nothing is left in the box</h2>
              <div className="text-lg text-indigo-700">
                <ul className="space-y-2">
                  <li>Client should have two keys to the SDB, test both keys to ensure they work</li>
                </ul>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 7</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="Initial Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Press ENTER & Press F1</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i2} alt="Key Return" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>Type in Number of keys that client is returning</li>
                    <li>Type in the client's account number</li>
                    <li>Press ENTER & Press F1</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i3} alt="Contract PDF" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>A new window will pop open with the PDF of the SDB closing contract</li>
                    <li>Print the contract and get Client's signature on both Branch Copy and Customer Copy</li>
                    <li>Give client the Customer Copy of the SDB contract</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Final Steps</h2>
              <div className="text-lg text-indigo-700">
                <ul className="space-y-2">
                  <li>Grab client's SDB keys</li>
                  <li>Find Entry Sheet and SDB opening contract (typically kept in binders in the vault)</li>
                  <li>Staple Entry Sheet, SDB opening contract, and SDB closing contract together</li>
                  <li>Put the stapled items in the binder for closed SDBs</li>
                </ul>
              </div>
            </section>
          </div>
          <div className="h-48" />
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0017;