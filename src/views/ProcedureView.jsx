import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TransactionProcedureMap from '../components/TransactionProcedureMap';
import { useAtom } from 'jotai';
import { currentProcedureAtom } from '../atoms/procedureAtom';

const ProcedureView = () => {
  const { procedureId } = useParams();
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (procedureId) {
      setCurrentProcedure(procedureId);
    }
  }, [procedureId, setCurrentProcedure]);

  const procedureNumber = parseInt(currentProcedure, 10);
  const TransactionProcedureComponent = TransactionProcedureMap[procedureNumber];

  if (!TransactionProcedureComponent) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <TransactionProcedureComponent />
    </div>
  );
};

export default ProcedureView;
