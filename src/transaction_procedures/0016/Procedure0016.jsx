import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0016-1.png'
import i2 from './0016-2.png'
import i3 from './0016-3.png'
import i4 from './0016-4.png'
import i5 from './0016-5.png'
import i6 from './0016-6.png'
import i7 from './0016-7.png'
import i8 from './0016-8.png'

function Procedure0016() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Open a New Safety Deposit Box</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Get the keys of SDB client wants</h2>
              <div className="text-lg text-indigo-700">
                <p className="text-sm italic">You may need to get your supervisor to do this</p>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 7</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="Box Selection" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Select 1 and Type in Box number</p>
                  <p className="text-sm italic">*In this case Portfolio Number is 37200</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i2} alt="Add Client" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>A new window will pop open</li>
                    <li>Click on "Add"</li>
                    <li>Find the client's ECIF profile</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i3} alt="Profile Selection" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <img src={i4} alt="Profile Added" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Once the client's ECIF profile has been added successfully, the window should close and go back to COINS</p>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Payment Setup</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i5} alt="Initial Entry" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Type in "N" and Press ENTER</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i6} alt="Payment Details" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>Initial Payment: 1</li>
                    <li>Annual Payment: 1</li>
                    <li>Type in Client's account number for SDB payments</li>
                    <li>Press ENTER & Press F1</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Final Steps</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i7} alt="Contract PDF" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>After pressing OK, A new window will pop open with the PDF of the SDB contract</li>
                    <li>Print the contract and get Client's signature on both Branch Copy and Customer Copy</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i8} alt="Entry Sheet" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>Insert SDB Entry Sheet to your printer</li>
                    <li>Get Client's signature on the SDB Entry Sheet</li>
                    <li>Give client the Customer Copy of the SDB contract and client keys (there should be two identical keys)</li>
                    <li>Put the Branch Copy of the SDB contract in the binder for SDBs</li>
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

export default Procedure0016;