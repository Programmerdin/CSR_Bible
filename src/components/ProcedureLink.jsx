import React from 'react';
import { Link } from "react-router-dom";
import procedureList from '../transaction_procedures/procedureList.json';

const ProcedureLink = ({ procedureNumber, buttonText, className }) => {
  const procedure = procedureList.find(proc => proc.procedureNumber === procedureNumber);
  
  if (!procedure) {
    console.error(`Procedure ${procedureNumber} not found`);
    return null;
  }

  const formattedName = procedure.procedureName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

  const defaultButtonText = `Continue to ${procedure.procedureName}`;

  return (
    <Link to={`/procedure/${procedureNumber}/${formattedName}`}>
      <button className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded ${className || ''}`}>
        {buttonText || defaultButtonText}
      </button>
    </Link>
  );
};

export default ProcedureLink;
