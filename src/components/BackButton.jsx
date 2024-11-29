import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
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
