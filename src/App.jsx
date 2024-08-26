import React, { useState, useEffect } from 'react';
import Procedure from './components/Procedure';
import ProcedureView from './views/ProcedureView';
import SearchView from './views/SearchView';
import HomeView from './views/HomeView';
import BottomNavigationBar from './components/BottomNavigationBar';
import './App.css';

function App() {
  const [currentView, setcurrentView] = useState('home');
  const [lastView, setLastView] = useState('home');

  const handleHomeClick = () => {
    console.log('Home icon clicked');
    setLastView(currentView);
    setcurrentView('home');
  };

  const handleSearchClick = () => {
    console.log('Search icon clicked');
    setLastView(currentView);
    setcurrentView('search');
  };

  const handleBankDraftButtonClick = () => {
    console.log('Bank Draft button clicked');
    setLastView(currentView);
    setcurrentView('procedure');
  };

  const handleBackButtonClick = () => {
    console.log('Back button clicked');
    if (currentView === 'search') {
      setLastView(currentView);
      setcurrentView(lastView);
    }
    if (currentView === 'procedure') {
      setLastView(currentView);
      setcurrentView(lastView);
    }

  };

  return (
    <div>
      <div className='Main-View'>
        {/* <Procedure procedureNumber={"0002"}/> */}
        {currentView === 'home' ? <HomeView onBankDraftButtonClick={handleBankDraftButtonClick}/> : 
        currentView === 'procedure' ? <ProcedureView onBackButtonClick={handleBackButtonClick}/> : 
        currentView === 'search' ? <SearchView onBackButtonClick={handleBackButtonClick}/> : null}
      </div>
      <BottomNavigationBar
        onHomeClick={handleHomeClick} 
        onSearchClick={handleSearchClick}
      />
    </div>
  );
}

export default App;