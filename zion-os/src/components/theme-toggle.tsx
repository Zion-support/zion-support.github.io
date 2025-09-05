"use client";


export function ThemeToggle() {_const { theme, _setTheme} = useTheme();

  return (_<div className="flex items-center gap-2">
      <span className="sr-only">Theme</span>
      <div className="flex rounded-lg border border-white/10 bg-zinc-900/50 p-1">
        <button
          onClick={_() => setTheme("light")}
          className={_`rounded px-2 py-1 text-sm transition-colors ${
            theme === "light"
              ? "bg-zion-blue text-white"
              : "text-zinc-400 hover:text-zinc-100"}`}
          aria-label="Switch to light theme"
          aria-pressed={_theme === "light"}
        >
          <Sun className="h-4 w-4" />
        </button>
        <button
          onClick={_() => setTheme("system")}
          className={_`rounded px-2 py-1 text-sm transition-colors ${
            theme === "system"
              ? "bg-zion-blue text-white"
              : "text-zinc-400 hover:text-zinc-100"}`}
          aria-label="Switch to system theme"
          aria-pressed={_theme === "system"}
        >
          <Monitor className="h-4 w-4" />
        </button>
        <button
          onClick={_() => setTheme("dark")}
          className={_`rounded px-2 py-1 text-sm transition-colors ${
            theme === "dark"
              ? "bg-zion-blue text-white"
              : "text-zinc-400 hover:text-zinc-100"}`}
          aria-label="Switch to dark theme"
          aria-pressed={_theme === "dark"}
        >
          <Moon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}