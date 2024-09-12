import React from 'react';
import '../TransactionProcedures.css';

import i1 from './0005-1.png'
import i2 from './0005-2.png'
import i3 from './0005-3.png'
import i4 from './0005-4.png'
import i5 from './0005-5.png'
import i6 from './0005-6.png'
import i7 from './0005-7.png'
import i8 from './0005-8.png'


function Procedure0005() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Outgoing C/List for USD cheques</p>
      <p className='procedure-big-text'>COINS 11 - 4</p>

      <img className='procedure-image' src={i1} />
      <p className='procedure-small-text'>Find the list with USD and type in the number</p>
      <p className='procedure-small-text'>Press Enter</p>
      <div className='gap'></div>

      <img className='procedure-image'src={i2} />
      <p className='procedure-small-text'>Press F7</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>Find USD Cheque List form and Serial Number on it</p>
      <div className='gap'></div>
      
      <img className='procedure-image' src={i4} />
      <p className='procedure-small-text'>SERIAL #...: Type in Serial Number</p>
      <p className='procedure-small-text'>FOREIGN AMT: Add up all amounts on USD cheques you have</p>
      <p className='procedure-small-text'>CLEARING TO: 2</p>
      <p className='procedure-small-text'>Press Enter</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i5} />
      <p className='procedure-small-text'>Type in the number of your added C/List and Press F1</p> 
      <p className='procedure-small-text'>Insert USD Cheque List form into printer</p>
      <p className='procedure-small-text'>Once printed, tear the two pages apart</p> 
      <div className='gap'></div>

      <p className='procedure-big-text'>CBFE</p>
      <img className='procedure-image' src={i6} />
      <p className='procedure-small-text'>Scan all your USD cheques and the top page of USD Cheque List form</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i7} />
      <p className='procedure-small-text'>Manually edit the USD C-List amount to the amount on USD Cheque List form</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i8} />
      <div className='gap'></div>
      
      <p className='procedure-small-text'>Put all of your USD cheques and the top page of USD Cheque List form together with a paper clip</p>
      <p className='procedure-small-text'>Then, put it in the cheque bag where all the scanned cheques go</p>
    </div>
  );
}

export default Procedure0005;