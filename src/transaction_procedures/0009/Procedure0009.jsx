// create a basic component
import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0009-1.png'
import i2 from './0009-2.png'


function Procedure0009() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Change Account Statement Type (Mail/eStatement/Mailing Frequency)</p>
      <p className='procedure-big-text'>COINS 25 - 3 & Account Number - 7</p>
      <img className='procedure-image' src={i1} />
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>Keep pressing ENTER until the the account is updated successfully</p>
    </div>
  );
}

export default Procedure0009;