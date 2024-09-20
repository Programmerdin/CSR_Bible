import React from 'react';
import '../TransactionProcedures.css';

import i1 from './0007-1.png'
import i2 from './0007-2.png'
import i3 from './0007-3.png'
import i4 from './0007-4.png'
import i5 from './0007-5.png'
import i6 from './0007-6.png'
import i7 from './0007-7.png'
import i8 from './0007-8.png'



function Procedure0007() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Mortgage Payout</p>
      <p className='procedure-big-text'>CBFE</p>
      <img className='procedure-image' src={i1} />
      <p className='procedure-small-text'>Search by Mortgage Number</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>Mortage Numbers typically end with ".1"</p>
      <p className='procedure-small-text'>Type out the Mortgage Number without "."</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>Function: Deposit</p>
      <p className='procedure-small-text'>To: select Mortgage Account</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i4} />
      <p className='procedure-small-text'>Scan cheque/draft</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i5} />
      <p className='procedure-small-text'>Press Post</p> 
      <div className='gap'></div>

      <img className='procedure-image' src={i6} />
      <p className='procedure-small-text'>Payment Reason: Payout</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i7} />
      <p className='procedure-small-text'>Press OK</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i8} />
      <p className='procedure-small-text'>Print Branch Copy</p>
    </div>
  );
}

export default Procedure0007;