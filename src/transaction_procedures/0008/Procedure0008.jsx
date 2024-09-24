import React from 'react';
import '../TransactionProcedures.css';

import i1 from './0008-1.png'
import i2 from './0008-2.png'
import i3 from './0008-3.png'
import i4 from './0008-4.png'




function Procedure0008() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Deposit USD Cash to USD Account</p>
      <p className='procedure-big-text'>Process deposit on CBFE</p>
      <img className='procedure-image' src={i1} />
      <p className='procedure-small-text'>Print out Branch Copy</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>Rate listed on the Branch Copy will be used on COINS</p> 
      <div className='gap'></div>

      <p className='procedure-big-text'>COINS 11 - 3</p>
      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>CURRENCY: USD</p>
      <p className='procedure-small-text'>FOREIGN AMOUNT: Amount deposited in USD</p>
      <p className='procedure-small-text'>DEBIT/CREDIT (DR/CR): CR</p>
      <p className='procedure-small-text'>COUNTER RATE: Rate listed on the Branch Copy</p>
      <p className='procedure-small-text'>FOREIGN CURR TR/ACCT: type in client's USD account info </p>
      <p className='procedure-small-text'>Once filled, Press F1</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i4} />

    </div>
  );
}

export default Procedure0008;