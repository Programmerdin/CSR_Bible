import { useState } from 'react';
import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import Search_Thin_Icon from '../assets/icons/search_thin.png';
import Search_Thick_Icon from '../assets/icons/search_thick.png';
import Home_Unfilled_Icon from '../assets/icons/home_unfilled.png';
import Home_Filled_Icon from '../assets/icons/home_filled.png';


const BottomNavigationBar = () => {
  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useAtom(lastViewAtom);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  const handleHomeIconClick = () => {
    console.log('Home icon clicked');
    setLastView(currentView);
    setCurrentView('home');
    scrollToTop(); // Scroll to the top of the screen
  };

  const handleSearchIconClick = () => {
    console.log('Search icon clicked');
    setLastView(currentView);
    setCurrentView('search');
    scrollToTop(); // Scroll to the top of the screen
  };

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around py-2">
      <div onClick={handleHomeIconClick}>
        <img src={currentView === 'home' ? Home_Filled_Icon : Home_Unfilled_Icon} className="w-7 cursor-pointer"/>
      </div>
      <div onClick={handleSearchIconClick}>
        <img src={currentView === 'search' ? Search_Thick_Icon : Search_Thin_Icon} className="w-7 cursor-pointer"/>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
