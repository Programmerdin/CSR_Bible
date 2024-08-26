import React, { useState, useEffect } from 'react';
import Procedure from './components/Procedure';
import ProcedureView from './views/ProcedureView';
import SearchView from './views/SearchView';
import HomeView from './views/HomeView';
import BottomNavigationBar from './components/BottomNavigationBar';
import './App.css';
import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from './atoms/viewAtom';

function App() {
  const [currentView, setcurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useState(lastViewAtom);


  return (
    <div>
      <div className='Main-View'>
        {/* <Procedure procedureNumber={"0002"}/> */}
        {currentView === 'home' ? <HomeView /> : 
        currentView === 'procedure' ? <ProcedureView /> : 
        currentView === 'search' ? <SearchView /> : null}
      </div>
      <BottomNavigationBar/>
    </div>
  );
}

export default App;