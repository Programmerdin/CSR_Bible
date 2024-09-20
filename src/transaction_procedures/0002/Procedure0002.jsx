import React from 'react';
import '../TransactionProcedures.css';

import i1 from './0002-1.png'
import i2 from './0002-2.png'
import i3 from './0002-3.png'
import i4 from './0002-4.png'
import i5 from './0002-5.png'
import i6 from './0002-6.png'
import i7 from './0002-7.png'
import i8 from './0002-8.png'
import i9 from './0002-9.png'
import i10 from './0002-10.png'
import i11 from './0002-11.png'
import i12 from './0002-12.png'
import i13 from './0002-13.png'
import i14 from './0002-14.png'
import i15 from './0002-15.png'





function Procedure0002() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Bank Draft in USD</p>
      <p className='procedure-big-text'>COINS 11 - 15 - 1</p>
      <img className='procedure-image' src={i1} />
      <p className='procedure-small-text'>To Country: 110</p>
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>SELECT: 1</p>
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>REMITTER: Client's name</p>
      <p className='procedure-small-text'>PAY TO THE ORDER OF: Name of entity/person who will receive the draft</p>
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i4} />
      <p className='procedure-small-text'>Source Of Funds: 1</p>
      <p className='procedure-small-text'>Tr/Acct: Type in client's USD account info</p>
      <p className='procedure-small-text'>Account Currency: USD</p>
      <p className='procedure-small-text'>Rate Source: 1</p>
      <p className='procedure-small-text'>S/C From Direct A/C: Y</p>
      <p className='procedure-small-text'>Face Amount: Type in amount in USD</p>
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i5} />
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i6} />
      <p className='procedure-small-text'>Home Address (Payee): Copy & Paste client's address from CBFE</p>
      <p className='procedure-small-text'>Relationship between Remitter & Payee: Type in appropriate option from the list</p>
      <p className='procedure-small-text'>Purpose of Payment: Type in appropriate option from the list</p>
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i7} />
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i8} />
      <p className='procedure-small-text'>Press F1</p>
      <div className='gap'></div>
      
      <img className='procedure-image' src={i9} />
      <p className='procedure-small-text'>Get Override</p>
      <p className='procedure-small-text'>Choose the printer for Drafts</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i10} />
      <p className='procedure-small-text'>Press F4</p>
      <div className='gap'></div>
      
      <img className='procedure-image' src={i11} />
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i12} />
      <p className='procedure-small-text'>Press ENTER to print Debit Slip</p>
      <img className='procedure-image' src={i14} />
      <p className='procedure-small-text'>Insert Double-sided Debit Slip into the printer</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i13} />
      <p className='procedure-small-text'>Get Client's Signature</p>
      <p className='procedure-small-text'>(the draft shown above is CAD draft but has all the features in the same format)</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i15} />
      <p className='procedure-small-text'>Get Client's Signature</p>
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

export default Procedure0002;