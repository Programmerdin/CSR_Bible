import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0013-1.png'
import i2 from './0013-2.png'
import i3 from './0013-3.png'
import i4 from './0013-4.png'
import i5 from './0013-5.png'



function Procedure0013() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Pay USD Visa with USD Cheque</p>
      <p className='procedure-big-text'>CBFE</p>
      <p className='procedure-small-text'>Function: Pay Credit Card</p>
      <img className='procedure-image' src={i1} />
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>Press Go</p>
      <p className='procedure-small-text'>Type the USD amount in the amount field</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>Press Post</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>COINS 11 - 2</p>
      <img className='procedure-image' src={i4} />
      <p className='procedure-small-text'>TR/ACCT...: 90002 / 0540307</p>
      <p className='procedure-small-text'>COMMNETS..: Client's USD Credit Card Number</p>
      <p className='procedure-small-text'>Once filled, Press F1</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i5} />
      <p className='procedure-small-text'>Press F6 and insert A4 paper into printer</p>

      <div className='gap'></div>


    </div>
  );
}

export default Procedure0013;