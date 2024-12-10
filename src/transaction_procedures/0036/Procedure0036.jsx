import React from 'react';
import { ScrollAreaNoBar } from "@/components/ui/scroll-area"
import BackButton from '../../components/BackButton';
import SaveProcedureButton from '../../components/SaveProcedureButton';
import { Button } from "@/components/ui/button"

function Procedure0036() {
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
          <h1 className="text-4xl font-bold text-indigo-900 mb-8 mt-12 text-center">Wire Information Form</h1>
          <div className="space-y-12">
            <section>
              <div>
                <div className="mb-4 flex justify-center items-center">
                  <Button
                    variant="default"
                    className="bg-indigo-600 text-white hover:bg-indigo-700 text-xl py-6 px-8 h-auto w-auto"
                    onClick={() => window.open('https://cibc-wire-form.vercel.app', '_blank', 'noopener,noreferrer')}
                  >
                    Click to Open Wire Form
                  </Button>
                </div>
                <p className="text-lg text-indigo-800 my-4">Use this form when a customer is looking to receive a wire transfer and needs to provide their account information to the sender</p>

              </div>
            </section>
          </div>
          <div className="h-48" /> {/* Spacing at bottom for scrolling */}
        </ScrollAreaNoBar>
      </div>
    </div>
  );
}

export default Procedure0036;