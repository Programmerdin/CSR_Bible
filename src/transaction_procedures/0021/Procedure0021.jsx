import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0021-1.png'
import i2 from './0021-2.png'
import i3 from './0021-3.png'
import i4 from './0021-4.png'


function Procedure0021() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Order Cheques for Personal Chequing Accounts</p>
      <p className='procedure-small-text'>For Business and PLC accounts refer to following procedures:</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>COINS 25</p>
      <img className='procedure-image' src={i1} />
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <div className='gap'></div>

      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>Ask client whether they want address and phone number shown on cheque</p>
      <p className='procedure-small-text'>Delete the address and phone number if client does not want it</p>
      <img className='procedure-image' src={i4} />

    </div>
  );
}

export default Procedure0021;