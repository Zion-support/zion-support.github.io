import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ViewMode = 'grid' | 'list' | 'card';

export interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const useViewMode = (): ViewModeContextType => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};

interface ViewModeProviderProps {
  children: ReactNode;
}

export const ViewModeProvider: React.FC<ViewModeProviderProps> = ({ children }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  useEffect(() => {
    // Load view mode from localStorage
    const savedViewMode = localStorage.getItem('zion_view_mode') as ViewMode;
    if (savedViewMode && ['grid', 'list', 'card'].includes(savedViewMode)) {
      setViewMode(savedViewMode);
    }
  }, []);

  const handleSetViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    localStorage.setItem('zion_view_mode', mode);
  };

  const toggleViewMode = () => {
    const modes: ViewMode[] = ['grid', 'list', 'card'];
    const currentIndex = modes.indexOf(viewMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    handleSetViewMode(modes[nextIndex]);
  };

  return (
    <ViewModeContext.Provider
      value={{
        viewMode,
        setViewMode: handleSetViewMode,
        toggleViewMode,
      }}
    >
      {children}
    </ViewModeContext.Provider>
  );
};