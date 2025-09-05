"use client&quot;;

import { createContext, useContext, useEffect, useState } from &quot;react&quot;;

type Theme = &quot;dark&quot; | &quot;light&quot; | &quot;system&quot;;

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: &quot;system&quot;,
  setTheme: () => null};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = &quot;system&quot;,
  storageKey = &quot;zion-ui-theme&quot;,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Only access localStorage on the client side
    if (typeof window !== &quot;undefined&quot;) {
      const storedTheme = localStorage.getItem(storageKey) as Theme;
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, [storageKey]);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;

    root.classList.remove(&quot;light&quot;, &quot;dark&quot;);

    if (theme === &quot;system&quot;) {
      const systemTheme = window.matchMedia(&quot;(prefers-color-scheme: dark)&quot;)
        .matches
        ? &quot;dark&quot;
        : &quot;light&quot;;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme, mounted]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      if (typeof window !== &quot;undefined&quot;) {
        localStorage.setItem(storageKey, theme);
      }
      setTheme(theme);
    }};

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error(&quot;useTheme must be used within a ThemeProvider");

  return context;
};