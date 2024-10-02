import React from 'react';
import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import { currentProcedureAtom, savedProceduresAtom } from '../atoms/procedureAtom';

const HomeView = () => {
  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useAtom(lastViewAtom);
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);
  const [savedProcedures, setSavedProcedures] = useAtom(savedProceduresAtom);


  return (
    <div>
      <h1 className=''>Saved procedures</h1>
      <p className=''>{savedProcedures}</p>
    </div>
  );
};

export default HomeView;
