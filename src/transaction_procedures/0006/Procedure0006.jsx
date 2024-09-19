import React from 'react';
import '../TransactionProcedures.css';

import i1 from './0006-1.png'
import i2 from './0006-2.png'
import i3 from './0006-3.png'
import i4 from './0006-4.png'
import i5 from './0006-5.png'



function Procedure0006() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Settlement Draft for U Bill (Closing)</p>
      <p className='procedure-big-text'>COINS 12 - 2</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>Once filled, Press ENTER</p>
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

      <p className='procedure-small-text'>Put the Settlement draft and U bill slips together into an envelope</p>
      <p className='procedure-small-text'>Put the envelope into the bag where all the cheques go</p>

    </div>
  );
}

export default Procedure0006;