import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0014-1.png'
import i2 from './0014-2.png'
import i3 from './0014-3.png'
import i4 from './0014-4.png'
import i5 from './0014-5.png'
import i6 from './0014-6.png'
import i7 from './0014-7.png'
import i8 from './0014-8.png'
import i9 from './0014-9.png'
import i10 from './0014-10.png'
import i11 from './0014-11.png'
import i12 from './0014-12.png'

function Procedure0014() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Traders RSG - Currency Exchange</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Important Notes</h2>
              <div className="text-lg text-indigo-700">
                <ul className="space-y-2">
                  <li>Traders RSG only works during weekdays and generally works until 6 PM Toronto Time</li>
                  <li>Use Traders RSG for currency exchange for USD & CAD for amounts over $5,000 (it's not a strict rule but small amounts generally don't get a good exchange rate anyways)</li>
                  <li>For exchanges over $500,000, call the trading desk 1-800-461-2422</li>
                </ul>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Teams</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <p>Install Traders RSG if you haven't already</p>
                  <img src={i1} alt="Teams Installation" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                </div>

                <div className="text-lg text-indigo-700">
                  <p>Open Traders RSG by searching for it in Search bar</p>
                  <img src={i2} alt="Opening Traders RSG" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Trading Process</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <ul className="space-y-2">
                    <li>Start talking to the bot</li>
                    <li>Type in the transaction and the amount</li>
                    <li>Buy/Sell XX,XXX USD/CAD</li>
                    <li>Client's FX code can be found under Product Summary on ECIF but it is not necessary to do the transaction</li>
                  </ul>
                  <img src={i3} alt="Bot Interaction" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                </div>

                <div className="text-lg text-indigo-700">
                  <ul className="space-y-2">
                    <li>Try to squeeze out as good of an exchange rate as possible if you like the client</li>
                    <li>Trader Bot can generally match VBCE's exchange rate (but not always)</li>
                    <li>*vbce stands for Vancouver Bullion & Currency Exchange</li>
                  </ul>
                  <img src={i4} alt="Rate Negotiation" className="rounded-lg object-cover w-full shadow-lg mb-4" />

                </div>

                <div className="text-lg text-indigo-700">
                  <ul className="space-y-2">
                    <li>Sometimes the bot will have issues and ask you to call the trading desk</li>
                    <li>The bot will ask you to call if the amount is extremely large (over $500,000 in my experience)</li>
                    <li>But if the amount is not large, you will need to redo the whole conversation</li>
                    <li>Type in restart and the bot will start over</li>
                  </ul>
                  <img src={i5} alt="Bot Issues" className="rounded-lg object-cover w-full shadow-lg mb-4" />

                </div>

                <div className="text-lg text-indigo-700">
                <img src={i6} alt="Rate Confirmation" className="rounded-lg object-cover w-full shadow-lg mb-4" />

                  <ul className="space-y-2">
                    <li>If the client is okay with the rate provided by the bot, type yes</li>
                    <li>Save the contract number for COINS 11 - 3 IDT</li>
                  </ul>

                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">CBFE</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i7} alt="Credit Account" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p className="font-semibold mb-2">Credit the account that is the buying side of the exchange:</p>
                  <ul className="space-y-2">
                    <li>Buy $2 USD, Sell $2.5 CAD = Credit $2 USD to Client's USD Account & Debit $2.5 CAD from Client's CAD Account</li>
                    <li>Sell $3 USD, Buy $3.8 CAD = Credit $3.8 CAD to Client's CAD Account & Debit $3 USD from Client's USD Account</li>
                  </ul>
                  <img src={i9} alt="Credit Example" className="rounded-lg object-cover w-full shadow-lg mb-4" />

                </div>

                <div className="text-lg text-indigo-700">
                  <p className="font-semibold mb-2">Debit the account that is the selling side of the exchange (Requires Supervisor Override usually)</p>
                  <img src={i8} alt="Debit Process" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  
                  <p>Print Customer Copy (aka receipt) once both Credit & Debit has been done</p>
                </div>
              </div>
            </section>

            <Separator className="bg-indigo-200" />

            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">COINS 11 - 3 Process</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <img src={i10} alt="COINS Details" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <ul className="space-y-2">
                    <li>FOREIGN AMOUNT: USD Amount</li>
                    <li>DEBIT/CREDIT (DR/CR):</li>
                    <li className="ml-6">CR if USD account is the buying side of the exchange</li>
                    <li className="ml-6">DR if USD account is the selling side of the exchange</li>
                    <li>RATE SOURCE: 3</li>
                    <li>TR/ACCT: Client's USD account number</li>
                    <li>Once filled, Press ENTER</li>
                  </ul>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i11} alt="Counter Rate" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>COINS will automatically input COUNTER RATE</p>
                  <p>Press ENTER</p>
                </div>

                <div className="text-lg text-indigo-700">
                  <img src={i12} alt="Final Step" className="rounded-lg object-cover w-full shadow-lg mb-4" />
                  <p>Press F1</p>
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

export default Procedure0014;