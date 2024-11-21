import i1 from './wire-common-steps-end/0004-wire-common-steps-1.png'
import i2 from './wire-common-steps-end/0004-wire-common-steps-2.png'
import i3 from './wire-common-steps-end/0004-wire-common-steps-3.png'
import i4 from './wire-common-steps-end/0004-wire-common-steps-4.png'
import i5 from './wire-common-steps-end/0004-wire-common-steps-5.png'
import i6 from './wire-common-steps-end/0004-wire-common-steps-6.png'
import i7 from './wire-common-steps-end/0004-wire-common-steps-7.png'
import i8 from './wire-common-steps-end/0004-wire-common-steps-8.png'
import i9 from './wire-common-steps-end/0004-wire-common-steps-9.png'
import i10 from './wire-common-steps-end/0004-wire-common-steps-10.png'

const Procedure0004CommonStepsEnd = () => {
  return (
    <section>
      <div className="space-y-6">
        <img src={i1} className="rounded-lg object-cover w-full shadow-lg mb-4" />
        <div>
          <p className="text-2xl text-indigo-700 mb-2">Insert Wire form into your printer</p>
          <img src={i2} alt="Step 9" className="rounded-lg object-cover w-full shadow-lg mb-4" />
          <p className="text-2xl text-indigo-700 mb-2">Get Client Signature</p>
          <img src={i3} alt="Step 10" className="rounded-lg object-cover w-full shadow-lg mb-4" />
          <p className="text-2xl text-indigo-700 mb-2">Get Override and signature from the person who gave you override</p>
          <img src={i4} alt="Step 11" className="rounded-lg object-cover w-full shadow-lg mb-4" />
        </div>

        <img src={i5} alt="Step 12" className="rounded-lg object-cover w-full shadow-lg mb-4" />
        <img src={i6} alt="Step 13" className="rounded-lg object-cover w-full shadow-lg mb-4" />
        <img src={i7} alt="Step 14" className="rounded-lg object-cover w-full shadow-lg mb-4" />
        <img src={i8} alt="Step 15" className="rounded-lg object-cover w-full shadow-lg mb-4" />
        
        <div>
          <p className="text-2xl text-indigo-700 mb-2">Insert Double Debit Slip into your printer</p>
          <img src={i9} alt="Step 9" className="rounded-lg object-cover w-full shadow-lg mb-4" />
          <p className="text-2xl text-indigo-700 mb-2">Get Client Signature</p>
          <img src={i10} alt="Step 17" className="rounded-lg object-cover w-full shadow-lg mb-4" />

          <p className="text-2xl text-indigo-700 mb-2">Tear off 1st page of Double Debit Slip</p>
          <p className="text-2xl text-indigo-700 mb-2">Tear off 1st page of Wire form</p>
          <p className="text-2xl text-indigo-700 mb-2">You keep the 1st pages of the wire form and Double Debit Slip</p>
          <p className="text-2xl text-indigo-700 mb-2">Give the remaining pages of wire form to the client and tear off the 2nd page of Double Debit Slip and give it to the client</p>
        </div>
      </div>
    </section>
  )
}

export default Procedure0004CommonStepsEnd;