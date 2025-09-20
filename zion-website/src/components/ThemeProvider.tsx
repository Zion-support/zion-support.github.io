import React from 'reactuse client',
import { createContext, useContext, useEffect, useState } from 'react',
type Theme = 'light' | 'dark' | 'system',
interface ThemeContextType {,
  theme: Theme,
  setTheme: (theme: Theme) => void,
  resolvedTheme: 'light' | 'dark'}
,
const ThemeContext = createContext<ThemeContextType | undefined>(undefined),
interface ThemeProviderProps {,
  children: React.ReactNode,
  defaultTheme?: Theme,
  storageKey?: string}
,
export function ThemeProvider({,
  children,
  defaultTheme = 'system',
  storageKey = 'zion-theme'
}: ThemeProviderProps) {,
  const [theme, setTheme] = useState<Theme>(defaultTheme),
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark'),
  useEffect(() => {,
    // Get theme from localStorage or use default,
    const storedTheme = localStorage.getItem(storageKey) as Theme,
    if (storedTheme && ['lightdarksystem'].includes(storedTheme)) {,
      setTheme(storedTheme)
    }
  }, [storageKey]),
  useEffect(() => {,
    const updateResolvedTheme = () => {,
      let resolved: 'light' | 'dark' = 'dark',
      if (theme === 'system') {,
        resolved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'} else {,
        resolved = theme
      }
,
      setResolvedTheme(resolved),
      applyTheme(resolved)
    }
,
    updateResolvedTheme(),
    // Listen for system theme changes,
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)'),
    const handleChange = () => {,
      if (theme === 'system') {,
        updateResolvedTheme()}
    }
,
    mediaQuery.addEventListener('change', handleChange),
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme]),
  const applyTheme = (resolvedTheme: 'light' | 'dark') => {,
    const root = document.documentElement,
    // Remove existing theme classes,
    root.classList.remove('lightdark'),
    // Add new theme class,
    root.classList.add(resolvedTheme),
    // Update meta theme-color,
    const metaThemeColor = document.querySelector('meta[name="theme-color"]'),
    if (metaThemeColor) {,
      metaThemeColor.setAttribute('content', resolvedTheme === 'dark' ? '#000000' : '#ffffff')
    }
,
    // Update CSS custom properties,
    root.style.setProperty('--theme-bg', resolvedTheme === 'dark' ? '#000000' : '#ffffff'),
    root.style.setProperty('--theme-text', resolvedTheme === 'dark' ? '#ffffff' : '#000000'),
    root.style.setProperty('--theme-border', resolvedTheme === 'dark' ? '#333333' : '#e5e5e5')
  }
,
  const handleSetTheme = (newTheme: Theme) => {,
    setTheme(newTheme),
    localStorage.setItem(storageKey, newTheme),
    // Track theme change,
    if (typeof window !== 'undefined' && (window as any).trackEvent) {,
      (window as any).trackEvent({,
        action: 'theme_change',
        category: 'preferences',
        label: newTheme})
    }
  }
,
  return (,
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, resolvedTheme }}>,
      {children}
    </ThemeContext.Provider>)
}
,
export function useTheme() {,
  const context = useContext(ThemeContext),
  if (context === undefined) {,
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
,
// Theme toggle component,
export function ThemeToggle() {,
  const { theme, setTheme, resolvedTheme } = useTheme(),
  return (,
    <button,
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm hover: bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
    >,
      {resolvedTheme === 'dark' ? (,
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
        </svg>) : (,
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />,
        </svg>)}
    </button>,
  )
}
,
// Theme selector component,
export function ThemeSelector() {,
  const { theme, setTheme } = useTheme(),
  return (,
    <div className="flex items-center space-x-2">,
      <label htmlFor="theme-select" className="text-sm font-medium text-gray-700 dark: text-gray-300">,
        Theme:,
      </label>,
      <select,
        id="theme-select",
        value={theme}
        onChange={(e) => setTheme(e.target.value as Theme)}
        className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm focus: border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white",
      >,
        <option value="light">Light</option>,
        <option value="dark">Dark</option>,
        <option value="system">System</option>,
      </select>,
    </div>,
  )}