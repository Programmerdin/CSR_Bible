import React, { useEffect, useState } from 'react';

const Procedure = ({ procedureNumber }) => {
  const [procedure, setProcedure] = useState(null);

  useEffect(() => {
    const loadProcedure = async () => {
      try {
        const procedureData = await import(`../transaction_procedures/${procedureNumber}/procedure.json`);
        // console.log('Loaded procedure data:', procedureData);
        setProcedure(procedureData);
      } catch (error) {
        console.error('Error loading procedure:', error);
      }
    };

    loadProcedure();
  }, [procedureNumber]);

  if (!procedure) return <div>Loading...</div>;
  // console.log('Procedure object:', procedure); // Log the procedure object
  // console.log('Procedure title:', procedure.title); // Log the procedure title

  return (
    <div>
      <h1>{procedure.title}</h1>
      <p>Tags: {procedure.tags.join(', ')}</p>
      <p>Steps:</p>
      {procedure.steps.map((step, index) => {
        return (
          <div key={index}>
            <p>Image: {step.image}</p>
            <img 
              src={`../src/transaction_procedures/${procedureNumber}/${step.image}`}
              style={{ width: '1080px'}}
            />
            <p>Text: {step.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Procedure;