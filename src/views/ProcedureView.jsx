import React from 'react';
import BackButton from '../components/BackButton';
import Procedure from '../components/Procedure';

const ProcedureView = ({onBackButtonClick}) => {
  return (
    <div>
      <h1>Procedure View</h1>
      <BackButton onClick={onBackButtonClick}/>
      <Procedure procedureNumber= {"0002"} /> 
    </div>
  );
};

export default ProcedureView;
