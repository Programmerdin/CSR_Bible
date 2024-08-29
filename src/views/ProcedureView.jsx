import React from 'react';
import BackButton from '../components/BackButton';
import Procedure from '../components/Procedure';

import { useAtom } from 'jotai';
import {currentProcedureAtom} from '../atoms/procedureAtom';

const ProcedureView = () => {
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);

  return (
    <div>
      <BackButton />
      <Procedure procedureNumber={currentProcedure}/>
    </div>
  );
};

export default ProcedureView;
