import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0011-1.png'
import i2 from './0011-2.png'
import i3 from './0011-3.png'
import i4 from './0011-4.png' 
import i5 from './0011-5.png'



function Procedure0011() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Deposit USD Cheque to USD Account</p>
      <p className='procedure-big-text'>CBFE</p>
      <img className='procedure-image' src={i1} />
      <p className='procedure-small-text'>Function: Deposit</p>
      <p className='procedure-small-text'>Select Client's USD account</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>Press Go</p>
      <p className='procedure-small-text'>Type the USD amount in the amount field and number of instruments</p>
      <p className='procedure-small-text'>Press Update</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>Always select Courier/Armoured Car</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>COINS 11 - 2</p>
      <img className='procedure-image' src={i4} />
      <p className='procedure-small-text'>RATE SOURCE. : 1</p>
      <p className='procedure-small-text'>Once filled, Press F1</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i5} />
      <p className='procedure-small-text'>Press F6 and insert A4 paper into printer</p>
    </div>
  );
}

export default Procedure0011;