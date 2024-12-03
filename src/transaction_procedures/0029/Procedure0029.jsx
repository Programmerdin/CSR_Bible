import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';

import i1 from './0029-1.png'
import i2 from './0029-2.png'
import i3 from './0029-3.png'
import i4 from './0029-4.png'
import i5 from './0029-5.png'
import i6 from './0029-6.png'


function Procedure0028() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Change Debit Card ATM/POS Limit</h1>

          <div className="space-y-12 text-lg text-indigo-700">
            <section>　　 　 　 　
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 21</h2>
                <div className="space-y-6 text-lg text-indigo-700">
                    <img src={i4} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <img src={i5} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <p className="text-lg text-indigo-700">Change the number in fields in red boxes to change ATM withdrawal limit and Purchase limit of the card</p>
                    <p className="text-lg text-indigo-700">The changes can only be done in certain increment amounts. Fiddle around to see what the increments are</p>
                    <p className="text-lg text-indigo-700">I was told that we shouldn't set the ATM withdrawal limit higher than $3,000 but I don't know if that's true</p>
                    <img src={i6} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                    <p className="text-lg text-indigo-700 mb-2">Fields in blue boxes can be changed as well</p>
                    <p className="text-lg text-indigo-700 mb-2">ATM and Point of Sale can be changed to "N" if client doesn't want the card to be used at ATMs at or store purchases</p>
                </div>
            </section>
            {/* the comment below is the procedure for form 8843 if needed */}
            {/* <Separator className="bg-indigo-200" />

            <section>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Form 8843</h2>
                <p className="text-lg text-indigo-700 mb-2">I'm not sure if filling out this form is actually necessary</p>
                <img src={i1} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                <img src={i2} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                <p className="text-lg text-indigo-700 mb-2">Fill out the form 8843</p>
                <img src={i3} className="rounded-lg object-cover w-full shadow-lg mb-4" />
                <p className="text-lg text-indigo-700 mb-2">Press Send on top of the form once done</p>
              </div>
            </section> */}
          </div>
          
          <div className="h-48" /> {/* Spacing at bottom for scrolling */}
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0028;

