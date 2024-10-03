import React, {useEffect, useState} from 'react';
import { useAtom } from 'jotai';
import { currentProcedureAtom, savedProceduresAtom } from '../atoms/procedureAtom';
import save_unfilled from '../assets/icons/save_unfilled.png';
import save_filled from '../assets/icons/save_filled.png';

const SaveProcedureButton = () => {
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);
  const [savedProcedures, setSavedProcedures] = useAtom(savedProceduresAtom);

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (savedProcedures.includes(currentProcedure)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [savedProcedures, currentProcedure]);

  const onClick = () => {
    if (saved) {
      const newSavedProcedures = savedProcedures.filter(proc => proc !== currentProcedure);
      setSavedProcedures(newSavedProcedures);
      localStorage.setItem('savedProcedures', JSON.stringify(newSavedProcedures));
      setSaved(false);
    } else {
      const newSavedProcedures = [...savedProcedures, currentProcedure];
      setSavedProcedures(newSavedProcedures);
      localStorage.setItem('savedProcedures', JSON.stringify(newSavedProcedures));
      setSaved(true);
    }
  };

  return (
    <button onClick={onClick}>
      <img src={saved ? save_filled : save_unfilled} className="w-8" />
    </button>
  );
};

export default SaveProcedureButton;
