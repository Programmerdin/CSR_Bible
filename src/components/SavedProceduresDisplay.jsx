import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import { currentProcedureAtom, savedProceduresAtom } from '../atoms/procedureAtom';
import procedureList from '../transaction_procedures/procedureList.json';
import threeLinesIcon from '../assets/icons/threeLines.png';


const SavedProceduresDisplay = () => {
  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useAtom(lastViewAtom);
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);
  const [savedProcedures, setSavedProcedures] = useAtom(savedProceduresAtom);
  const [savedProceduresWithDetails, setSavedProceduresWithDetails] = useState([]);

  useEffect(() => {
    const temp = savedProcedures
      .map(procNum => procedureList.find(proc => proc.procedureNumber === procNum) || null)
      .filter(proc => proc !== null);
    setSavedProceduresWithDetails(temp);
  }, [savedProcedures]); // Add savedProcedures as a dependency

  // Properly define the function here using const
  const handleSavedProceduresClick = (procedureNumber) => {
    setCurrentProcedure(procedureNumber);
    setCurrentView('procedure');
    setLastView('home');
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

