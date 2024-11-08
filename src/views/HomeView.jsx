import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import { currentProcedureAtom, savedProceduresAtom } from '../atoms/procedureAtom';
import procedureList from '../transaction_procedures/procedureList.json';
import SavedProceduresDisplay from '../components/SavedProceduresDisplay';


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
    <div className=''>
      <SavedProceduresDisplay />
    </div>
  );
};

export default HomeView;

