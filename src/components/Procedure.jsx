import React, { useEffect, useState } from 'react';
import procedureList from '../transaction_procedures/procedureList.json';

const Procedure = ({ procedureNumber }) => {
  const [procedure, setProcedure] = useState(null);
  const [procedureName, setProcedureName] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const loadProcedure = async () => {
      try {
        // Find the procedure metadata by procedureNumber
        const procedureMetaData = procedureList.find(
          (item) => item.procedureNumber === procedureNumber
        );
        if (procedureMetaData) {
          setProcedureName(procedureMetaData.procedureName);
          setTags(procedureMetaData.tags);
        }

        // Load the procedure data
        const procedureData = await import(`../transaction_procedures/${procedureNumber}/procedure.json`);
        setProcedure(procedureData);
      } catch (error) {
        console.error('Error loading procedure:', error);
      }
    };

    loadProcedure();
  }, [procedureNumber]);

  if (!procedure) return <div>Loading...</div>;

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold pb-4 underline'>{procedureName}</h1>
      {procedure.steps.map((step, index) => {
        return (
          <div key={index}>
            {step.image && (
              <img 
                src={`../src/transaction_procedures/${procedureNumber}/${step.image}`}
                style={{ width: '1080px'}}
              />
            )}
            {step.text && (
              <div dangerouslySetInnerHTML={{ __html: step.text }} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Procedure;