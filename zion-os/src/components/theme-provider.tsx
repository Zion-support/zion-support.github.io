"use client",

import { createContext, useContext, useEffect, useState } from "react";
type Theme = $2;
type ThemeProviderProps = $2;
  defaultTheme?: Theme,
  storageKey?: string
},

type ThemeProviderState = $2;
  setTheme: (theme: Theme) => void
},

const initialState: ThemeProviderState = $2;
  setTheme: () => null},

const ThemeProviderContext = $2;
export function ThemeProvider({
  children,
  defaultTheme = $2;
  storageKey = $2;
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme),
  const [mounted, setMounted] = useState($2);
  useEffect(() => {
    setMounted($2);
    // Only access localStorage on the client side
    if (typeof window !== "undefined") {
      const storedTheme = $2;
      if (storedTheme) {
        setTheme(storedTheme)
      }
    }
  }, [storageKey]),

  useEffect(() => {
    if (!mounted) return,

    const root = $2;
    root.classList.remove($2);
    if (theme = $2;
      root.classList.add($2);
      return
    }

    root.classList.add(theme)
  }, [theme, mounted]),

  const value = $2;
    setTheme: (theme: Theme) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, theme)
      }
      setTheme(theme)
    }},

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext($2);
  if (context === undefined)
    throw new Error($2);
  return context
},