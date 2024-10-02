import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0018-1.png'
import i2 from './0018-2.png'

function Procedure0018() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Pay USD Visa with USD Account</p>

      <p className='procedure-big-text'>CBFE</p>
      <img className='procedure-image' src={i1} />
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>Click on US Dollar Card on the top</p>
      <p className='procedure-small-text'>Type in the amount & select the USD account</p>
      <p className='procedure-small-text'>Press Post</p>


    </div>
  );
}

export default Procedure0018;