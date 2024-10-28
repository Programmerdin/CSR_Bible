import React, { useState } from 'react'
import { ArrowLeft, Bookmark } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollAreaNoBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import i1 from './0023-1.png'


function Procedure0023() {
  const [isSaved, setIsSaved] = useState(false)

  const toggleSave = () => setIsSaved(!isSaved)

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
          <h1 className="text-4xl font-bold text-indigo-900 mb-4 mt-12 text-center">Wire Transfer</h1>

          <div className="mb-8">
            <img
              src={i1}
              alt="Wire Transfer Overview"
              width={800}
              height={400}
              className="rounded-lg object-cover w-full shadow-lg"
            />
          </div>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Preparation</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <p className="mb-2">Verify customer identity</p>
                  <img
                    src={i1}
                    alt="ID Verification"
                    width={600}
                    height={300}
                    className="rounded-md object-cover w-full shadow-md"
                  />
                  <p className="mt-2 text-sm text-indigo-600">Check government-issued ID</p>
                </div>
                <div className="text-lg text-indigo-700">
                  <p>Confirm transfer amount and currency</p>
                </div>
                <div className="text-lg text-indigo-700">
                  <p className="mb-2">Obtain recipient's bank details</p>
                  <img
                    src={i1}
                    alt="Bank Details Form"
                    width={600}
                    height={300}
                    className="rounded-md object-cover w-full shadow-md"
                  />
                </div>
              </div>
            </section>
            <Separator className="bg-indigo-200" />
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Processing</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <p className="mb-2">Enter transfer details in the system</p>
                  <img
                    src={i1}
                    alt="Transfer Details Screen"
                    width={600}
                    height={300}
                    className="rounded-md object-cover w-full shadow-md"
                  />
                </div>
                <div className="text-lg text-indigo-700">
                  <p>Double-check all entered information</p>
                </div>
                <div className="text-lg text-indigo-700">
                  <p className="mb-2">Confirm transfer fees with the customer</p>
                  <img
                    src={i1}
                    alt="Fee Structure Chart"
                    width={600}
                    height={300}
                    className="rounded-md object-cover w-full shadow-md"
                  />
                  <p className="mt-2 text-sm text-indigo-600">Fees may vary based on destination and amount</p>
                </div>
              </div>
            </section>
            <Separator className="bg-indigo-200" />
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Completion</h2>
              <div className="space-y-6">
                <div className="text-lg text-indigo-700">
                  <p>Process the transfer</p>
                </div>
                <div className="text-lg text-indigo-700">
                  <p className="mb-2">Provide customer with transaction receipt</p>
                  <img
                    src={i1}
                    alt="Sample Receipt"
                    width={600}
                    height={300}
                    className="rounded-md object-cover w-full shadow-md"
                  />
                </div>
                <div className="text-lg text-indigo-700">
                  <p>Inform customer about expected transfer time</p>
                  <p className="mt-2 text-sm text-indigo-600">Usually 1-3 business days for international transfers</p>
                </div>
              </div>
            </section>
          </div>
          <div className="h-48" /> {/* Adds empty space at bottom for scrolling */}

        </ScrollAreaNoBar>
      </div>
    </div>
  )
}

export default Procedure0023;
