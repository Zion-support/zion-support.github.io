"use client";


type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {_children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;};

type ThemeProviderState = {_theme: Theme;
  setTheme: (_theme: Theme) => void;};

const initialState: ThemeProviderState = {_theme: "system", _setTheme: () => null};

const _ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider(_{_children, _defaultTheme = "system", _storageKey = "zion-ui-theme", _...props}: ThemeProviderProps) {_const [theme, _setTheme] = useState<Theme>(defaultTheme);
  const [mounted, _setMounted] = useState(false);

  useEffect__(() => {
    setMounted(true);
    
    // Only access localStorage on the client side
    if (typeof window !== "undefined") {
      const _storedTheme = localStorage.getItem(storageKey) as Theme;
      if (storedTheme) {
        setTheme(storedTheme);}
    }
  }, [storageKey]);

  useEffect__(() => {_if (!mounted) return;

    const _root = window.document.documentElement;

    root.classList.remove("light", _"dark");

    if (theme === "system") {
      const _systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;}

    root.classList.add(theme);
  }, [theme, mounted]);

  const _value = {_theme, _setTheme: (_theme: Theme) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, _theme);}
      setTheme(theme);
    }};

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {_return <>{children}</>;
  }

  return (
    <ThemeProviderContext.Provider {_...props} value={_value}>
      {_children}
    </ThemeProviderContext.Provider>
  );
}

export const _useTheme = () => {_const _context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;};