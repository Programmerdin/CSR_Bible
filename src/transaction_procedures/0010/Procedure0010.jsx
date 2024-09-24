// create a basic component
import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0010-1.png'
import i2 from './0010-2.png'
import i3 from './0010-3.png'
import i4 from './0010-4.png'
import i5 from './0010-5.png'



function Procedure0010() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Deposit Foreign/USD Cheque to CAD Account</p>
      <p className='procedure-big-text'>CBFE 12 - 1 - 1</p>
      <img className='procedure-image' src={i1} />
      <p className='procedure-small-text'>Function: Foreign Exchange</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>Function: Foreign Exchange</p>
      <p className='procedure-small-text'>Instrument Type: Cheques</p>
      <p className='procedure-small-text'>Currnecy: Select the appropriate currency</p>
      <p className='procedure-small-text'>Foreign Amount: Type in amount (add up amounts if depositing more than 1 cheque)</p>
      <p className='procedure-small-text'>Press Calculate, then Press Accept & Post </p>
      <div className='gap'></div>

      <p className='procedure-big-text'>COINS 11 - 2</p>
      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>Select: 1</p>
    </div>
  );
}

export default Procedure0010;