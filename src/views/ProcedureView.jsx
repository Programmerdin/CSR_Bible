import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TransactionProcedureMap from '../components/TransactionProcedureMap';
import { useAtom } from 'jotai';
import { currentProcedureAtom } from '../atoms/procedureAtom';
import procedureList from '../transaction_procedures/procedureList.json';
const ProcedureView = () => {
  const { procedureId, procedureName } = useParams();
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (procedureId) {
      const procedure = procedureList.find(proc => proc.procedureNumber === procedureId);
      
      if (procedure) {
        // If we have a procedure name in the URL, verify it's correct
        if (procedureName) {
          const expectedName = procedure.procedureName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_+|_+$/g, '');

          // Redirect to the correct URL if the name doesn't match
          if (procedureName !== expectedName) {
            navigate(`/procedure/${procedureId}/${expectedName}`, { replace: true });
            return;
          }
        } else {
          // If no procedure name in URL, redirect to the URL with the name
          const formattedName = procedure.procedureName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_+|_+$/g, '');
          navigate(`/procedure/${procedureId}/${formattedName}`, { replace: true });
          return;
        }

        setCurrentProcedure(procedureId);
      } else {
        navigate('/');
      }
    }
  }, [procedureId, procedureName, setCurrentProcedure, navigate]);

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
