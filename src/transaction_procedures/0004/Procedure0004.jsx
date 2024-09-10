import React from 'react';
import '../TransactionProcedures.css';

import i1 from './0004-1.png'
import i2 from './0004-2.png'
import i3 from './0004-3.png'
import i4 from './0004-4.png'
import i5 from './0004-5.png'
import i6 from './0004-6.png'
import i7 from './0004-7.png'


function Procedure0004() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Wire Transfer</p>
      <p className='procedure-big-text'>COINS 11 - 12</p>
      <img className='procedure-image' src={i1} />
      <img className='procedure-image'src={i2} />
      <img className='procedure-image' src={i3} />  
      <img className='procedure-image' src={i4} />
      <img className='procedure-image' src={i5} />
      <img className='procedure-image' src={i6} />
      <img className='procedure-image' src={i7} />
    </div>
  );
}

export default Procedure0004;