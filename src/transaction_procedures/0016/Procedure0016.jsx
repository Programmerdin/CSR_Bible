import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0016-1.png'
import i2 from './0016-2.png'
import i3 from './0016-3.png'
import i4 from './0016-4.png'
import i5 from './0016-5.png'
import i6 from './0016-6.png'
import i7 from './0016-7.png'
import i8 from './0016-8.png'




function Procedure0016() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Open a New Safety Deposit Box</p>

      <p className='procedure-big-text'>Get the keys of SDB client wants</p>
      <p className='procedure-small-text'>You may need to get your supervisor to do this</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>COINS 7</p>
      <img className='procedure-image' src={i1} />
      <p className='procedure-small-text'>Select 1 and Type in Box number</p>
      <p className='procedure-tiny-text'>*In this case Portfolio Number is 37200</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>A new window will pop open</p>
      <p className='procedure-small-text'>Click on "Add"</p>
      <p className='procedure-small-text'>Find the client's ECIF profile</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i3} />
      <div className='gap'></div>

      <img className='procedure-image' src={i4} />
      <p className='procedure-small-text'>Once the client's ECIF profile has been added successfully, the window should close and go back to COINS</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>COINS</p>
      <img className='procedure-image' src={i5} />
      <p className='procedure-small-text'>Type in "N" and Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i6} />
      <p className='procedure-small-text'>Initial Payment: 1</p>
      <p className='procedure-small-text'>Annual Payment: 1</p>
      <p className='procedure-small-text'>Type in Client's account number for SDB payments</p>
      <p className='procedure-small-text'>Press ENTER & Press F1</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i7} />
      <p className='procedure-small-text'>After pressing OK, A new window will pop open with the PDF of the SDB contract</p>
      <p className='procedure-small-text'>Print the contract and get Client's signature on both Branch Copy and Customer Copy</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i8} />
      <p className='procedure-small-text'>Insert SDB Entry Sheet to your printer</p>
      <p className='procedure-small-text'>Get Client's signature on the SDB Entry Sheet</p>
      <div className='gap'></div>

      <p className='procedure-small-text'>Give client the Customer Copy of the SDB contract and client keys (there should be two identical keys)</p>
      <p className='procedure-small-text'>Put the Branch Copy of the SDB contract in the binder for SDBs</p>

    </div>
  );
}

export default Procedure0016;