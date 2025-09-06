import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {'
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

<<<<<<< HEAD:src_backup/components/ThemeProvider.tsx
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
=======
export const useTheme = () => {};
  const context = useContext(ThemeContext);
  if (context === undefined) {'
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {}
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ThemeProvider.tsx
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {'
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {}
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

<<<<<<< HEAD:src_backup/components/ThemeProvider.tsx
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
=======
  useEffect(() => {'
    localStorage.setItem('theme', theme);'
    if (theme === 'dark') {'
      document.documentElement.classList.add('dark');
    } else {'
      document.documentElement.classList.remove('dark');
    }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ThemeProvider.tsx
  }, [theme]);

  const toggleTheme = () => {'
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
<<<<<<< HEAD:src_backup/components/ThemeProvider.tsx
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
=======
};'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ThemeProvider.tsx
