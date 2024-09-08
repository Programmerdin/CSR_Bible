import React from 'react';
import '../TransactionProcedures.css';

import i1 from './0006-1.png'
import i2 from './0006-2.png'
import i3 from './0006-3.png'
import i4 from './0006-4.png'

function Procedure0003() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Pay Credit Card with Cash</p>
      <p className='procedure-big-text'>go to CBFE</p>
      <img className='procedure-image' src={i1} />
      <img className='procedure-image'src={i2} />
      <p className='procedure-big-text'>COINS 1 - 6</p>
      <img className='procedure-image' src={i3} />  
      <img className='procedure-image' src={i4} />
    </div>
  );
}

export default Procedure0003;