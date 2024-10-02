import React, { useState, useEffect } from 'react';
import ProcedureView from './views/ProcedureView';
import SearchView from './views/SearchView';
import HomeView from './views/HomeView';
import BottomNavigationBar from './components/BottomNavigationBar';
import './App.css';
import { useAtom } from 'jotai';
import { currentProcedureAtom, savedProceduresAtom } from './atoms/procedureAtom';
import { currentViewAtom, lastViewAtom } from './atoms/viewAtom';

function App() {
  const [currentView, setcurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useState(lastViewAtom);
  const [savedProcedures, setSavedProcedures] = useAtom(savedProceduresAtom);

  useEffect(() => {
    const storedSavedProcedures = localStorage.getItem('savedProcedures');
    if (storedSavedProcedures) {
      const parsedSavedProcedures = [...new Set(JSON.parse(storedSavedProcedures))];
      setSavedProcedures(parsedSavedProcedures);
    }
  }, []);
  

  return (
    <div className=''>
      <div className='Main-View'>
        {currentView === 'home' ? <HomeView /> : 
        currentView === 'procedure' ? <ProcedureView /> : 
        currentView === 'search' ? <SearchView /> : null}
      </div>
      <BottomNavigationBar/>
    </div>
  );
}

export default App;