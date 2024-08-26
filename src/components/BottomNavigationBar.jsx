import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';

import './BottomNavigationBar.css';
import { useAtom } from 'jotai';

const BottomNavigationBar = () => {
  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useAtom(lastViewAtom);

  const handleHomeIconClick = () => {
    console.log('Home icon clicked');
    setLastView(currentView);
    setCurrentView('home');
  };

  const handleSearchIconClick = () => {
    console.log('Search icon clicked');
    setLastView(currentView);
    setCurrentView('search');
  };


  return (
    <div className="bottom-navigation-bar">
      <div className="nav-link" onClick={handleHomeIconClick}>
        <HomeIcon style={{ fontSize: 64 }}/>
      </div>
      <div className="nav-link" onClick={handleSearchIconClick}>
        <SearchIcon style={{ fontSize: 64 }}/>
      </div>
    </div>
  );
};

export default BottomNavigationBar;