import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0020-1.png'
import i2 from './0020-2.png'

function Procedure0020() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Withdraw USD Cash from USD Account</p>

      <p className='procedure-big-text'>CBFE</p>
      <img className='procedure-image' src={i1} />
      <div className='gap'></div>

      <p className='procedure-big-text'>COINS 11 - 3</p>
      <img className='procedure-image' src={i2} />
    </div>
  );
}

export default Procedure0020;