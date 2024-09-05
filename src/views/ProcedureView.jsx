import React from 'react';
import BackButton from '../components/BackButton';
import TransactionProcedureMap from '../components/TransactionProcedureMap';

import { useAtom } from 'jotai';
import {currentProcedureAtom} from '../atoms/procedureAtom';

const ProcedureView = () => {
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);
  const procedureNumber = parseInt(currentProcedure, 10);
  const TransactionProcedureComponent = TransactionProcedureMap[procedureNumber];

  return (
    <div>
      <div className='pl-3 pt-3'><BackButton/></div>
      {TransactionProcedureComponent ? <TransactionProcedureComponent /> : <div>No TransactionProcedureComponent found</div>}
    </div>
  );
};

export default ProcedureView;
