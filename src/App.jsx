import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProcedureView from './views/ProcedureView';
import SearchView from './views/SearchView';
import './App.css';
import { useAtom } from 'jotai';
import { currentProcedureAtom, savedProceduresAtom } from './atoms/procedureAtom';

function App() {
  const [savedProcedures, setSavedProcedures] = useAtom(savedProceduresAtom);

  useEffect(() => {
    const storedSavedProcedures = localStorage.getItem('savedProcedures');
    if (storedSavedProcedures) {
      const parsedSavedProcedures = [...new Set(JSON.parse(storedSavedProcedures))];
      setSavedProcedures(parsedSavedProcedures);
    }
  }, []);

  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<SearchView />} />
        <Route path="/procedure/:procedureId/:procedureName" element={<ProcedureView />} />
        <Route path="/procedure/:procedureId" element={<ProcedureView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;