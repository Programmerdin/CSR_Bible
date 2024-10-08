import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0022-1.png'
import i2 from './0022-2.png'
import i3 from './0022-3.png'
import i4 from './0022-4.png'
import i5 from './0022-5.png'
import i6 from './0022-6.png'
import i7 from './0022-7.png'
import i8 from './0022-8.png'
import i9 from './0022-9.png'
import i10 from './0022-10.png'
import i11 from './0022-11.png'
import i12 from './0022-12.png'


function Procedure0022() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>How to Close</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>Make sure the two numbers from CBFE and COINS are equal</p>
      <p className='procedure-big-text'>CBFE</p>
      <img className='procedure-image' src={i4} />

      <p className='procedure-big-text'>COINS 11 - 8 - 4</p>
      <img className='procedure-image' src={i1} />
      <div className='gap'></div>

      <p className='procedure-big-text'>CBFE</p>
      <img className='procedure-image' src={i2} />
      <div className='gap'></div>

      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>Insert A4 paper into printer</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i7} />
      <p className='procedure-small-text'>Wrap your cheque in the printed A4 paper</p>
      <img className='procedure-image' src={i8} />
      <div className='gap'></div>

      <p className='procedure-big-text'>COINS 11 - 8 - 4</p>
      <img className='procedure-image' src={i11} />
      <p className='procedure-small-text'>Insert A4 paper into printer</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i9} />
      <p className='procedure-small-text'>Wrap your cheque in the printed A4 paper</p>
      <img className='procedure-image' src={i10} />
      <div className='gap'></div>

      <img className='procedure-image' src={i12} />
      <img className='procedure-image' src={i6} />
      <img className='procedure-image' src={i5} />
      <p className='procedure-small-text'>Select Close Session</p>


    </div>
  );
}

export default Procedure0022;