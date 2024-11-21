import i1 from './wire-common-steps-middle1/0004-wire-common-steps-middle1-1.png'
import i2 from './wire-common-steps-middle1/0004-wire-common-steps-middle1-2.png'
import i3 from './wire-common-steps-middle1/0004-wire-common-steps-middle1-3.png'

const Procedure0004CommonStepsMiddle1 = () => {
  return (
    <section>
      <div className="space-y-6">
        <img src={i1} className="rounded-lg object-cover w-full shadow-lg mb-4" />
        <div>
            <p className="text-2xl text-indigo-700 mb-2">This screen will appear if account is a joint account</p>
            <img src={i2} className="rounded-lg object-cover w-full shadow-lg mb-4" />
        </div>
        <img src={i3} className="rounded-lg object-cover w-full shadow-lg mb-4" />
      </div>
    </section>
  )
}

export default Procedure0004CommonStepsMiddle1;