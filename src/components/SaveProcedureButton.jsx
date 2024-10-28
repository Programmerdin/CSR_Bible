import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { currentProcedureAtom, savedProceduresAtom } from '../atoms/procedureAtom';
import { Button } from "@/components/ui/button";
import { Bookmark } from 'lucide-react';

const SaveProcedureButton = () => {
  const [currentProcedure, setCurrentProcedure] = useAtom(currentProcedureAtom);
  const [savedProcedures, setSavedProcedures] = useAtom(savedProceduresAtom);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (savedProcedures.includes(currentProcedure)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedProcedures, currentProcedure]);

  const toggleSave = () => {
    if (isSaved) {
      const newSavedProcedures = savedProcedures.filter(proc => proc !== currentProcedure);
      setSavedProcedures(newSavedProcedures);
      localStorage.setItem('savedProcedures', JSON.stringify(newSavedProcedures));
      setIsSaved(false);
    } else {
      const newSavedProcedures = [...savedProcedures, currentProcedure];
      setSavedProcedures(newSavedProcedures);
      localStorage.setItem('savedProcedures', JSON.stringify(newSavedProcedures));
      setIsSaved(true);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full bg-white/80 backdrop-blur-sm"
      onClick={toggleSave}
    >
      <Bookmark className={`h-4 w-4 ${isSaved ? 'text-yellow-500 fill-yellow-500' : 'text-indigo-600'}`} />
    </Button>
  );
};

export default SaveProcedureButton;
