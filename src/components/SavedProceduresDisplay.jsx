import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { currentProcedureAtom, savedProceduresAtom } from '../atoms/procedureAtom';
import procedureList from '../transaction_procedures/procedureList.json';
import threeLinesIcon from '../assets/icons/threeLines.png';

const SavedProceduresDisplay = () => {
  const navigate = useNavigate();
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);
  const [savedProcedures, setSavedProcedures] = useAtom(savedProceduresAtom);
  const [savedProceduresWithDetails, setSavedProceduresWithDetails] = useState([]);

  useEffect(() => {
    const temp = savedProcedures
      .map(procNum => procedureList.find(proc => proc.procedureNumber === procNum) || null)
      .filter(proc => proc !== null);
    setSavedProceduresWithDetails(temp);
  }, [savedProcedures]);

  const handleSavedProceduresClick = (procedureNumber) => {
    setCurrentProcedure(procedureNumber);
    navigate(`/procedure/${procedureNumber}`);
  };

  return (
    <div className='bg-gray-200 rounded-lg m-2 text-center'>
      <p className='font text-3xl font-bold mb-3'>Saved</p>
      <ul>
        {[...savedProceduresWithDetails].reverse().map((proc, index) => (
          <li 
            key={index} 
            className='flex items-center rounded-xl py-3 pl-2 hover:bg-[#9CA3AF] active:bg-[#9CA3AF] cursor-pointer'
            onClick={() => handleSavedProceduresClick(proc.procedureNumber)}
          >
            <img src={threeLinesIcon} className='w-6 mr-3'></img>
            {proc.procedureName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedProceduresDisplay;
