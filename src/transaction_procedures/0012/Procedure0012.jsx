import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0012-1.png'
import i2 from './0012-2.png'
import i3 from './0012-3.png'



function Procedure0012() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Close Account (Chequing, Saving, USD Accounts)</p>
      <p className='procedure-big-text'>CBFE</p>
      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>Ensure account balance is "0"</p>
      <p className='procedure-small-text'>Account closing will not work on Saturdays (being future dated on Friday afternoon) & non-business days</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i1} />
      <p className='procedure-small-text'>Function: Debits/Credits</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>Funciton: Close Account</p>
      <p className='procedure-small-text'>Transit/Account: Select the account to be closed</p>
      <p className='procedure-small-text'>Make sure "Outstanding entries ...." box is checked</p>
      <p className='procedure-small-text'>Press Close Account</p>

    </div>
  );
}

export default Procedure0012;