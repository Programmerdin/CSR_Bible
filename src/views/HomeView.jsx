import React from 'react';
import SearchBar from '../components/SearchBar';
import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import { currentProcedureAtom } from '../atoms/procedureAtom';

const HomeView = () => {
  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useAtom(lastViewAtom);
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);

  const onClick = () => {
    setLastView(currentView);
    setCurrentProcedure('0001');
    setCurrentView('procedure');
  };

  return (
    <div>
      <h1>Home View</h1>
      <SearchBar />
      <h3>Recent</h3>
      <button onClick={onClick}>Bank Draft</button>
    </div>
  );
};

export default HomeView;
