import React from 'react';
import { useAtom } from 'jotai';
import { currentViewAtom, lastViewAtom } from '../atoms/viewAtom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [lastView, setLastView] = useAtom(lastViewAtom);

  const onClick = () => {
    setLastView(currentView);
    setCurrentView(lastView)
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full bg-white/80 backdrop-blur-sm"
      onClick={onClick}
    >
      <ArrowLeft className="h-4 w-4 text-indigo-600" />
    </Button>
  );
};

export default BackButton;
