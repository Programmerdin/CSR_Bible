import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0002-1.png'
import i2 from './0002-2.png'
import i3 from './0002-3.png'
import i4 from './0002-4.png'
import i5 from './0002-5.png'
import i6 from './0002-6.png'
import i7 from './0002-7.png'
import i8 from './0002-8.png'
import i9 from './0002-9.png'
import i10 from './0002-10.png'
import i11 from './0002-11.png'
import i12 from './0002-12.png'
import i13 from './0002-13.png'
import i14 from './0002-14.png'
import i15 from './0002-15.png'

function Procedure0002() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Bank Draft in USD from USD Account</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 11 - 15 - 1</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i1} alt="Initial Setup" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>To Country: 110</li>
                    <li>Press ENTER</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i2} alt="Selection Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>SELECT: 1</li>
                    <li>Press ENTER</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i3} alt="Client Details" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>REMITTER: Client's name</li>
                    <li>PAY TO THE ORDER OF: Name of entity/person who will receive the draft</li>
                    <li>Press ENTER</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Account Details</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i4} alt="Account Information" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>Source Of Funds: 1</li>
                    <li>Tr/Acct: Type in client's USD account info</li>
                    <li>Account Currency: USD</li>
                    <li>Rate Source: 1</li>
                    <li>S/C From Direct A/C: Y</li>
                    <li>Face Amount: Type in amount in USD</li>
                    <li>Press ENTER</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i5} alt="Confirmation Screen" className="rounded-lg object-cover w-full shadow-lg mb-2" />
                  <p className="mt-2">Press ENTER</p>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Additional Information</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i6} alt="Additional Details" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>Home Address (Payee): Copy & Paste client's address from CBFE</li>
                    <li>Relationship between Remitter & Payee: Type in appropriate option from the list</li>
                    <li>Purpose of Payment: Type in appropriate option from the list</li>
                    <li>Press ENTER</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i7} alt="Confirmation" className="rounded-lg object-cover w-full shadow-lg mb-2" />
                  <p className="mt-2">Press ENTER</p>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Processing and Printing</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i8} alt="Processing Step" className="rounded-lg object-cover w-full shadow-lg mb-2" />
                  <p className="mt-2">Press F1</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i9} alt="Override Screen" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>Get Override</li>
                    <li>Choose the printer for Drafts</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i10} alt="Print Screen" className="rounded-lg object-cover w-full shadow-lg mb-2" />
                  <p className="mt-2">Press F4</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i11} alt="Confirmation Screen" className="rounded-lg object-cover w-full shadow-lg mb-2" />
                  <p className="mt-2">Press ENTER</p>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Printing Debit Slip and Signatures</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i12} alt="Debit Slip Print" className="rounded-lg object-cover w-full shadow-lg mb-2" />
                  <p className="mt-2">Press ENTER to print Debit Slip</p>
                  <img src={i14} alt="Debit Slip Example" className="rounded-lg object-cover w-full shadow-lg mt-4" />
                  <p className="mt-2">Insert Double Debit Slip into the printer</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i13} alt="Draft Example" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Get Client's Signature</p>
                  <p className="mt-2 text-sm text-indigo-600">(the draft shown above is CAD draft but has all the features in the same format)</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i15} alt="Final Document" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="mt-2">Get Client's Signature</p>
                </div>

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

export default Procedure0002;
