import React, { createContext, useContext, useState } from 'react';

const ViewModeContext = createContext();

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};

export const ViewModeProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('desktop');
  const [isMobile, setIsMobile] = useState(false);

  const value = {
    viewMode,
    setViewMode,
    isMobile,
    setIsMobile
  };

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
