import React from 'react';
import { Link } from "react-router-dom";
import { FileText, ChevronRight } from 'lucide-react';
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

  const defaultButtonText = procedure.procedureName;

  // Function to handle click and open in new tab
  const handleClick = (e) => {
    e.preventDefault();
    window.open(`/procedure/${procedureNumber}/${formattedName}`, '_blank');
  };

  return (
    <Link 
      to={`/procedure/${procedureNumber}/${formattedName}`} 
      onClick={handleClick}
      className={`block ${className || ''}`}
    >
      <div className="flex items-center p-4 hover:bg-indigo-600 hover:text-white cursor-pointer border-b border-gray-100 transition-colors duration-150 ease-in-out bg-white rounded-lg shadow-sm group">
        <div className="text-indigo-600 group-hover:text-white mr-4"><FileText className="w-5 h-5" /></div>
        <span className="text-lg text-gray-800 group-hover:text-white">{buttonText || defaultButtonText}</span>
        <ChevronRight className="ml-auto text-gray-400 group-hover:text-white" />
      </div>
    </Link>
  );
};

export default ProcedureLink;
