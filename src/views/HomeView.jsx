import React from 'react';
import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import { currentProcedureAtom } from '../atoms/procedureAtom';

const HomeView = () => {
  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useAtom(lastViewAtom);
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);


  return (
    <div>
      <h1 className=''>CSR Manual</h1>
    </div>
  );
};

export default HomeView;
