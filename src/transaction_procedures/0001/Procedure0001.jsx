// create a basic component
import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0001-1.png'
import i2 from './0001-2.png'
import i3 from './0001-3.png'
import i4 from './0001-4.png'
import i5 from './0001-5.png'
import i6 from './0001-6.png'
import i7 from './0001-7.png'
import i8 from './0001-8.png'
import i9 from './0001-9.png'


function Procedure0001() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Bank Draft in CAD</p>
      <p className='procedure-big-text'>COINS 12 - 1 - 1</p>
      <img className='procedure-image' src={i1} />
      <p className='procedure-small-text'>PAY TO THE ORDER OF: Name of Beneficiary</p>
      <p className='procedure-small-text'>AMT. : Type in amount in CAD</p>
      <p className='procedure-small-text'>NAME OF REMITTER: Copy & Paste client's name from CBFE</p>
      <p className='procedure-small-text'>SOURCE OF FUNDS: 1</p>
      <p className='procedure-small-text'>TR/ACCT: Type in client's CAD account info</p>
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>Press F1</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i4} />
      <p className='procedure-small-text'>Get Override</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i5} />
      <p className='procedure-small-text'>Choose the printer for Drafts</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i6} />
      <p className='procedure-small-text'>Insert Double Debit Slip into the printer (below image)</p>
      <img className='procedure-image' src={i8} />
      <div className='gap'></div>

      <img className='procedure-image' src={i7} />
      <img className='procedure-image' src={i9} />
      <p className='procedure-small-text'>Get Client's signature on Draft and Debit slip</p>
      <div className='gap'></div>

      <p className='procedure-small-text'>Tear off Printed Draft paper into 3 separate pieces</p>
      <p className='procedure-small-text'>Top: Actual Bank Draft</p>
      <p className='procedure-small-text'>Middle: Client Copy</p>
      <p className='procedure-small-text'>Bottom: Branch Copy</p>
      <div className='gap'></div>

      <p className='procedure-small-text'>Tear off Printed Debit Slip into 2 pieces</p>
      <p className='procedure-small-text'>Staple together one of the debit slip with Client Copy of Draft</p>
      <p className='procedure-small-text'>Staple together the other piece of debit slip with Branch Copy of Draft</p>
    </div>
  );
}

export default Procedure0001;