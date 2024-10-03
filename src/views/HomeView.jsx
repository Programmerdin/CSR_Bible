import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import { currentProcedureAtom, savedProceduresAtom } from '../atoms/procedureAtom';
import procedureList from '../transaction_procedures/procedureList.json';


const HomeView = () => {
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
    <div className='pl-4 pt-3'>
      <p className='font text-3xl font-bold'>Saved</p>
      <ul>
        {[...savedProceduresWithDetails].reverse().map((proc, index) => (
          <li 
            key={index} 
            className='flex items-center justify-between py-3 pl-2 hover:bg-[#f6f6f6] active:bg-[#f6f6f6] cursor-pointer'
            onClick={() => handleSavedProceduresClick(proc.procedureNumber)}
          >
            {proc.procedureName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeView;

