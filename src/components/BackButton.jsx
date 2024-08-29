import React from 'react';
import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import left_arrow from '../assets/icons/left_arrow.png';

const BackButton = () => {
  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useAtom(lastViewAtom);

  const onClick = () => {
    setLastView(currentView);
    setCurrentView(lastView)
  };

  return (
    <button onClick={onClick} className="back-button">
      <img src={left_arrow} className="w-8" />
    </button>
  );
};

export default BackButton;
