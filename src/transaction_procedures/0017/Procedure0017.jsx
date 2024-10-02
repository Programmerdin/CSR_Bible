import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0017-1.png'
import i2 from './0017-2.png'
import i3 from './0017-3.png'

function Procedure0017() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Close Safety Deposit Box</p>

      <p className='procedure-big-text'>Get client to empty their SDB & make sure nothing is left in the box</p>
      <p className='procedure-small-text'>Client should have two keys to the SDB, test both keys to ensure they work</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>COINS 7</p>
      <img className='procedure-image' src={i1} />
      <p className='procedure-small-text'>Press ENTER & Press F1</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i2} />
      <p className='procedure-small-text'>Type in Number of keys that client is returning</p>
      <p className='procedure-small-text'>Type in the client's account number</p>
      <p className='procedure-small-text'>Press ENTER & Press F1</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>A new window will pop open with the PDF of the SDB closing contract</p>
      <p className='procedure-small-text'>Print the contract and get Client's signature on both Branch Copy and Customer Copy</p>
      <p className='procedure-small-text'>Give client the Customer Copy of the SDB contract</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>Grab client's SDB keys</p>
      <p className='procedure-small-text'>Find Entry Sheet and SDB opening contract (typically kept in binders in the vault)</p>
      <p className='procedure-small-text'>Staple Entry Sheet, SDB opening contract, and SDB closing contract together</p>
      <p className='procedure-small-text'>Put the stapled items in the binder for closed SDBs</p>
    </div>
  );
}

export default Procedure0017;