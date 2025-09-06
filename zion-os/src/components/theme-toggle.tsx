<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
"use client",;
import { useTheme } from "@/components/theme-provider",;
import { Moon, Sun, Monitor } from "lucide-react",;
export function ThemeToggle() {;
  const { theme, setTheme } = useTheme();

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (;
    <div className="flex items-center gap-2">;
      <span className="sr-only">Theme</span>;
      <div className="flex rounded-lg border border-white/10 bg-zinc-900/50 p-1">;
        <button;
          onClick={() => setTheme("light")}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className={`rounded px-2 py-1 text-sm transition-colors ${;
            theme === "light";

              ? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
"use client",
import { use_theme  } from '@/components / theme - provider';,
import { Moon, Sun, Monitor  } from './lucide-react';,
export /**
 * ThemeToggle - Function description
 */
function ThemeToggle() {
  const { theme, set_theme } = use_theme ();
  return (
    <div className="flex items - center gap - 2">;
      <span className="sr - only">Theme</span>;
      <div className="flex rounded - lg border border - white / 10 bg - zinc - 900 / 50 p - 1">;
        <button;
          on_click={() => set_theme ("light")}
          className={`rounded px - 2 py - 1 text - sm transition - colors ${
            theme === "light";
              ? "bg - zion - blue text - white";
              : "text - zinc - 400 hover:text - zinc - 100";
<<<<<<< HEAD
=======
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          }`}
          aria-label="Switch to light theme";
          aria-pressed={theme === "light"}
        >;
          <Sun className="h-4 w-4" />;
        </button>;
        <button;
<<<<<<< HEAD
          onClick={() => setTheme("system")}
          className={`rounded px-2 py-1 text-sm transition-colors ${;
=======
<<<<<<< HEAD
=======

          on_click={() => set_theme ("system")}
          className={`rounded px - 2 py - 1 text - sm transition - colors ${
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            theme === "system";
              ? "bg - zion - blue text - white";
              : "text - zinc - 400 hover:text - zinc - 100";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          }`}
          aria-label="Switch to system theme";
          aria-pressed={theme === "system"}
        >;
          <Monitor className="h-4 w-4" />;
        </button>;
        <button;
<<<<<<< HEAD
          onClick={() => setTheme("dark")}
          className={`rounded px-2 py-1 text-sm transition-colors ${;
=======
<<<<<<< HEAD
=======

          on_click={() => set_theme ("dark")}
          className={`rounded px - 2 py - 1 text - sm transition - colors ${
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            theme === "dark";
              ? "bg - zion - blue text - white";
              : "text - zinc - 400 hover:text - zinc - 100";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          }`}
          aria-label="Switch to dark theme";
          aria-pressed={theme === "dark"}
        >;
          <Moon className="h-4 w-4" />;
        </button>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
}
=======
    </div>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
