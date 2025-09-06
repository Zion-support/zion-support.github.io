<<<<<<< HEAD
"use client";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Monitor } from "lucide-react";
export function ThemeToggle() {const { theme, setTheme } = useTheme();
=======
"use client",;
import { useTheme } from "@/components/theme-provider",;
import { Moon, Sun, Monitor } from "lucide-react",;
export function ThemeToggle() {;
  const { theme, setTheme } = useTheme();
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (;
    <div className="flex items-center gap-2">;
      <span className="sr-only">Theme</span>;
      <div className="flex rounded-lg border border-white/10 bg-zinc-900/50 p-1">;
        <button;
          onClick={() => setTheme("light")}
<<<<<<< HEAD
          className={`rounded px-2 py-1 text-sm transition-colors ${theme === "light";
=======
          className={`rounded px-2 py-1 text-sm transition-colors ${;
            theme === "light";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              ? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";
          }`}
          aria-label="Switch to light theme";
          aria-pressed={theme === "light"}
        >;
          <Sun className="h-4 w-4" />;
        </button>;
        <button;
          onClick={() => setTheme("system")}
<<<<<<< HEAD
          className={`rounded px-2 py-1 text-sm transition-colors ${theme === "system";
=======
          className={`rounded px-2 py-1 text-sm transition-colors ${;
            theme === "system";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              ? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";
          }`}
          aria-label="Switch to system theme";
          aria-pressed={theme === "system"}
        >;
          <Monitor className="h-4 w-4" />;
        </button>;
        <button;
          onClick={() => setTheme("dark")}
<<<<<<< HEAD
          className={`rounded px-2 py-1 text-sm transition-colors ${theme === "dark";
=======
          className={`rounded px-2 py-1 text-sm transition-colors ${;
            theme === "dark";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              ? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";
          }`}
          aria-label="Switch to dark theme";
          aria-pressed={theme === "dark"}
        >;
          <Moon className="h-4 w-4" />;
        </button>;
      </div>;
    </div>;
  );
}