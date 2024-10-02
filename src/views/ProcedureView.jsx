import React from 'react';
import BackButton from '../components/BackButton';
import TransactionProcedureMap from '../components/TransactionProcedureMap';

import { useAtom } from 'jotai';
import {currentProcedureAtom} from '../atoms/procedureAtom';
import SaveProcedureButton from '../components/SaveProcedureButton';

const ProcedureView = () => {
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);
  const procedureNumber = parseInt(currentProcedure, 10);
  const TransactionProcedureComponent = TransactionProcedureMap[procedureNumber];

  return (
    <div>
      <div className="flex justify-between items-center pl-3 pt-3">
        <BackButton />
        <SaveProcedureButton />
      </div>
      {TransactionProcedureComponent ? <TransactionProcedureComponent /> : <div>No TransactionProcedureComponent found</div>}
    </div>
  );
};

export default ProcedureView;
