import React from 'react';
import BackButton from '../components/BackButton';
import Procedure from '../components/Procedure';

const ProcedureView = () => {
  return (
    <div>
      <h1>Procedure View</h1>
      <BackButton />
      <Procedure procedureNumber= {"0002"} /> 
    </div>
  );
};

export default ProcedureView;
