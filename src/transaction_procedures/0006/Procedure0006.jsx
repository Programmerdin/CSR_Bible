import React from 'react';

import i1 from './0006-1.png'
import i2 from './0006-2.png'
import i3 from './0006-3.png'
import i4 from './0006-4.png'

function Procedure0006() {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-4xl font-bold'>Pay Credit Card with Cash</p>
      <p className='text-2xl font-bold'>go to CBFE</p>
      <img src={i1} />
      <img src={i2} />
      <p className='text-2xl font-bold'>COINS 1 - 6</p>
      <img src={i3} />  
      <img src={i4} />
    </div>
  );
}

export default Procedure0006;