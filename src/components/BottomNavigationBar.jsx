import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

import './BottomNavigationBar.css';

const BottomNavigationBar = ({ onHomeClick, onSearchClick }) => {
  return (
    <div className="bottom-navigation-bar">
      <div className="nav-link" onClick={onHomeClick}>
        <HomeIcon style={{ fontSize: 64 }}/>
      </div>
      <div className="nav-link" onClick={onSearchClick}>
        <SearchIcon style={{ fontSize: 64 }}/>
      </div>
    </div>
  );
};

export default BottomNavigationBar;