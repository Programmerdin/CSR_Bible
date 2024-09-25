import React from 'react';

import '../TransactionProcedures.css';
import i1 from './0014-1.png'
import i2 from './0014-2.png'
import i3 from './0014-3.png'
import i4 from './0014-4.png'
import i5 from './0014-5.png'
import i6 from './0014-6.png'
import i7 from './0014-7.png'
import i8 from './0014-8.png'
import i9 from './0014-9.png'
import i10 from './0014-10.png'
import i11 from './0014-11.png'
import i12 from './0014-12.png'



function Procedure0014() {
  return (
    <div className='procedure-container'>
      <p className='procedure-title'>Traders RSG - Currency Exchange</p>

      <p className='procedure-small-text'>Traders RSG only works during weekdays and generally works until 6 PM Toronto Time</p>
      <p className='procedure-small-text'>Use Traders RSG for currency exchange for USD & CAD for amounts over $5,000 (it's not a strict rule but small amounts generally don't get a good exhange rate anyways)</p>
      <p className='procedure-small-text'>For exchanges over $500,000. Call the trading desk 1-800-461-2422</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>Teams</p>
      <p className='procedure-small-text'>Install Traders RSG if you haven't already</p>
      <img className='procedure-image' src={i1} />
      <div className='gap'></div>

      <p className='procedure-small-text'>Open Traders RSG by seaching for it in Search bar</p>
      <img className='procedure-image' src={i2} />
      <div className='gap'></div>

      <p className='procedure-small-text'>Start talking to the bot</p>
      <p className='procedure-small-text'>Type in the transaction and the amount</p>
      <p className='procedure-small-text'>Buy/Sell XX,XXX USD/CAD</p>
      <img className='procedure-image' src={i3} />
      <p className='procedure-small-text'>Client's FX code can be found under Product Summary on ECIF but it is not necessary to do the transaction</p> 
      <div className='gap'></div>

      <img className='procedure-image' src={i4} />
      <p className='procedure-small-text'>Try to squeeze out as good of an exchange rate as possible if you like the client</p>
      <p className='procedure-small-text'>Trader Bot can generally match VBCE's exchange rate (but not always)</p>
      <p className='procedure-small-text'>*vbce stands for Vancouver Bullion & Currency Exchange</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i5} />
      <p className='procedure-small-text'>Sometimes the bot will shit the bed and ask you to call the trading desk</p>
      <p className='procedure-small-text'>The bot will ask you to call if the amount is extremely large (over $500,000 in my experience)</p>
      <p className='procedure-small-text'>But if the amount is not large, you will need to redo the whole conversation</p>
      <p className='procedure-small-text'>Type in restart and the bot will start over</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i6} />
      <p className='procedure-small-text'>if the client is okay with the rate provided by the bot, type yes</p>
      <p className='procedure-small-text'>Save the contract number for COINS 11 - 3 IDT</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>CBFE</p>
      <img className='procedure-image' src={i7} />
      <p className='procedure-small-text'>Credit the account that is the buying side of the exchange</p>
      <img className='procedure-image' src={i9} />
      <p className='procedure-small-text'>Buy $2 USD, Sell $2.5 CAD = Credit $2 USD to Client's USD Account & Debit $2.5 CAD from Client's CAD Account</p>
      <p className='procedure-small-text'>Sell $3 USD, Buy $3.8 CAD = Credit $3.8 CAD to Client's CAD Account & Debit $3 USD from Client's USD Account</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i7} />
      <p className='procedure-small-text'>Debit the account that is the selling side of the exchange (Requires Supervisor Override usually)</p>
      <img className='procedure-image' src={i8} />
      <p className='procedure-small-text'>Buy $2 USD, Sell $2.5 CAD = Credit $2 USD to Client's USD Account & Debit $2.5 CAD from Client's CAD Account</p>
      <p className='procedure-small-text'>Sell $3 USD, Buy $3.8 CAD = Credit $3.8 CAD to Client's CAD Account & Debit $3 USD from Client's USD Account</p>
      <div className='gap'></div>

      <p className='procedure-small-text'>Print Customer Copy (aka receipt) once both Credit & Debit has been done</p>
      <div className='gap'></div>

      <p className='procedure-big-text'>COINS 11 - 3</p>
      <img className='procedure-image' src={i10} />
      <p className='procedure-small-text'>FOREIGN AMOUNT: USD Amount</p>
      <p className='procedure-small-text'>DEBIT/CREDIT (DR/CR):</p>
      <p className='procedure-small-text'>CR if USD account is the buying side of the exchange</p>
      <p className='procedure-small-text'>DR if USD account is the selling side of the exchange</p>
      <br></br>
      <p className='procedure-small-text'>RATE SOURCE: 3</p> 
      <p className='procedure-small-text'>TR/ACCT: Client's USD account number</p>
      <p className='procedure-small-text'>Once filled, Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i11} />
      <p className='procedure-small-text'>COINS will automatically input COUNTER RATE</p>
      <p className='procedure-small-text'>Press ENTER</p>
      <div className='gap'></div>

      <img className='procedure-image' src={i12} />
      <p className='procedure-small-text'>Press F1</p>
    </div>
  );
}

export default Procedure0014;