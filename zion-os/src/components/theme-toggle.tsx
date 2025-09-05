"use client&quot;;

import { useTheme } from &quot;@/components/theme-provider&quot;;
import { Moon, Sun, Monitor } from &quot;lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only">Theme</span>
      <div className="flex rounded-lg border border-white/10 bg-zinc-900/50 p-1&quot;>
        <button
          onClick={() => setTheme(&quot;light")}
          className={`rounded px-2 py-1 text-sm transition-colors ${
            theme === "light&quot;
              ? &quot;bg-zion-blue text-white&quot;
              : &quot;text-zinc-400 hover:text-zinc-100&quot;
          }`}
          aria-label=&quot;Switch to light theme&quot;
          aria-pressed={theme === &quot;light"}
        >
          <Sun className="h-4 w-4&quot; />
        </button>
        <button
          onClick={() => setTheme(&quot;system")}
          className={`rounded px-2 py-1 text-sm transition-colors ${
            theme === "system&quot;
              ? &quot;bg-zion-blue text-white&quot;
              : &quot;text-zinc-400 hover:text-zinc-100&quot;
          }`}
          aria-label=&quot;Switch to system theme&quot;
          aria-pressed={theme === &quot;system"}
        >
          <Monitor className="h-4 w-4&quot; />
        </button>
        <button
          onClick={() => setTheme(&quot;dark")}
          className={`rounded px-2 py-1 text-sm transition-colors ${
            theme === "dark&quot;
              ? &quot;bg-zion-blue text-white&quot;
              : &quot;text-zinc-400 hover:text-zinc-100&quot;
          }`}
          aria-label=&quot;Switch to dark theme&quot;
          aria-pressed={theme === &quot;dark"}
        >
          <Moon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}