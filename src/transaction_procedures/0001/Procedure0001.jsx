// create a basic component
import React from 'react';

import i4 from './0001-4.png'
import i5 from './0001-5.png'
import i6 from './0001-6.png'
import i7 from './0001-7.png'
import i8 from './0001-8.png'
import i9 from './0001-9.png'
import i10 from './0001-10.png'
import i11 from './0001-11.png'

function Procedure0001() {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-4xl font-bold'>Bank Draft in CAD</p>
      <p className='text-2xl font-bold'>COINS 12 - 1 - 1</p>
      <img src={i4} />
      <img src={i8} />
    </div>
  );
}

export default Procedure0001;