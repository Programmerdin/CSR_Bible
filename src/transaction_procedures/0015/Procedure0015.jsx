import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0015-1.png'
import i2 from './0015-2.png'
import i3 from './0015-3.png'
import i4 from './0015-4.png'
import i5 from './0015-5.png'



function Procedure0015() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Find Client's Advisor</p>

      <p className='procedure-big-text'>CBFE</p>
      <img className='procedure-image' src={i1} />
      <p className='procedure-small-text'>Copy Portfolio Number</p>
      <p className='procedure-tiny-text'>*In this case Portfolio Number is 37200</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>COINS 9 - 2</p>
      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>Type in Portfolio Number</p>
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>Copy Advisor's COINS ID</p>
      <p className='procedure-tiny-text'>*In this case Advisor's COINS ID is WC00406</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>Teams / Outlook</p>
      <img className='procedure-image' src={i4} />
      <img className='procedure-image' src={i5} />

    </div>
  );
}

export default Procedure0015;