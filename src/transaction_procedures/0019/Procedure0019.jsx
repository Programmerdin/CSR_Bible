import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0019-1.png'
import i2 from './0019-2.png'
import i3 from './0019-3.png'
import i4 from './0019-4.png'
import i5 from './0019-5.png'
import i6 from './0019-6.png'

function Procedure0019() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Unregistered Bill</p>
      <img className='procedure-image' src={i5} />
      <p className='procedure-small-text'>Located the amount to pay</p>

      <p className='procedure-big-text'>CBFE</p>
      <img className='procedure-image' src={i1} />
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <div className='gap'></div>
      
      <img className='procedure-image' src={i3} />
      <div className='gap'></div>

      <img className='procedure-image' src={i4} />
      <p className='procedure-small-text'>Stamp the back of the CRA slip</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i6} />
      <p className='procedure-small-text'>Keep the CRA slip for settlement draft for closing (ie the bottom part of the CRA bill paper) </p> 

    </div>
  );
}

export default Procedure0019;