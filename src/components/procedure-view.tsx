import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, Bookmark } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function ProcedureViewComponent() {
  const [isSaved, setIsSaved] = useState(false)

  const toggleSave = () => setIsSaved(!isSaved)

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-4 sm:p-6 md:p-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="fixed top-4 left-4 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm"
          >
            <ArrowLeft className="h-4 w-4 text-indigo-600" />
          </Button>
        </div>
        <div className="fixed top-4 right-4 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 backdrop-blur-sm"
            onClick={toggleSave}
          >
            <Bookmark className={`h-4 w-4 ${isSaved ? 'text-yellow-500 fill-yellow-500' : 'text-indigo-600'}`} />
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-32px)]">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4 mt-12">Wire Transfer</h1>
          
          <p className="text-xl text-indigo-700 mb-6">Complete guide for processing wire transfers securely and efficiently.</p>

          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=400&width=800&text=Wire+Transfer+Overview"
              alt="Wire Transfer Overview"
              width={800}
              height={400}
              className="rounded-lg object-cover w-full shadow-lg"
            />
          </div>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Preparation</h2>
              <ol className="list-decimal list-inside space-y-6">
                <li className="text-lg text-indigo-700">
                  <p className="mb-2">Verify customer identity</p>
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=ID+Verification"
                    alt="ID Verification"
                    width={600}
                    height={300}
                    className="rounded-md object-cover w-full shadow-md"
                  />
                  <p className="mt-2 text-sm text-indigo-600">Check government-issued ID</p>
                </li>
                <li className="text-lg text-indigo-700">
                  <p>Confirm transfer amount and currency</p>
                </li>
                <li className="text-lg text-indigo-700">
                  <p className="mb-2">Obtain recipient's bank details</p>
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Bank+Details+Form"
                    alt="Bank Details Form"
                    width={600}
                    height={300}
                    className="rounded-md object-cover w-full shadow-md"
                  />
                </li>
              </ol>
            </section>
            <Separator className="bg-indigo-200" />
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Processing</h2>
              <ol className="list-decimal list-inside space-y-6">
                <li className="text-lg text-indigo-700">
                  <p className="mb-2">Enter transfer details in the system</p>
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Transfer+Details+Screen"
                    alt="Transfer Details Screen"
                    width={600}
                    height={300}
                    className="rounded-md object-cover w-full shadow-md"
                  />
                </li>
                <li className="text-lg text-indigo-700">
                  <p>Double-check all entered information</p>
                </li>
                <li className="text-lg text-indigo-700">
                  <p className="mb-2">Confirm transfer fees with the customer</p>
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Fee+Structure+Chart"
                    alt="Fee Structure Chart"
                    width={600}
                    height={300}
                    className="rounded-md object-cover w-full shadow-md"
                  />
                  <p className="mt-2 text-sm text-indigo-600">Fees may vary based on destination and amount</p>
                </li>
              </ol>
            </section>
            <Separator className="bg-indigo-200" />
            <section>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Completion</h2>
              <ol className="list-decimal list-inside space-y-6">
                <li className="text-lg text-indigo-700">
                  <p>Process the transfer</p>
                </li>
                <li className="text-lg text-indigo-700">
                  <p className="mb-2">Provide customer with transaction receipt</p>
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Sample+Receipt"
                    alt="Sample Receipt"
                    width={600}
                    height={300}
                    className="rounded-md object-cover w-full shadow-md"
                  />
                </li>
                <li className="text-lg text-indigo-700">
                  <p>Inform customer about expected transfer time</p>
                  <p className="mt-2 text-sm text-indigo-600">Usually 1-3 business days for international transfers</p>
                </li>
              </ol>
            </section>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}