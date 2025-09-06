
<<<<<<< HEAD
<<<<<<< HEAD
=======
"use client",;
import { useTheme } from "@/components/theme-provider",;
import { Moon, Sun, Monitor } from "lucide-react",;
export function ThemeToggle() {;
  const { theme, setTheme } = useTheme();

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (;
    <div className="flex items-center gap-2">;
      <span className="sr-only">Theme</span>;
      <div className="flex rounded-lg border border-white/10 bg-zinc-900/50 p-1">;
        <button;
          onClick={() => setTheme("light")}

<<<<<<< HEAD
=======
          className={`rounded px-2 py-1 text-sm transition-colors ${;
            theme === "light";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              ? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
          }`}
          aria - label="Switch to light theme";
          aria - pressed={theme === "light"}
        >;
          <Sun className="h - 4 w - 4" />;
        </button>;
        <button;
<<<<<<< HEAD
<<<<<<< HEAD
          onClick={() => setTheme("system")}

              ? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          on_click={() => set_theme ("system")}
          className={`rounded px - 2 py - 1 text - sm transition - colors ${
            theme === "system";
              ? "bg - zion - blue text - white";
              : "text - zinc - 400 hover:text - zinc - 100";
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
          onClick={() => setTheme("system")}
<<<<<<< HEAD
          className={`rounded px-2 py-1 text-sm transition-colors ${theme === "system";
=======
          className={`rounded px-2 py-1 text-sm transition-colors ${;
            theme === "system";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              ? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }`}
          aria - label="Switch to system theme";
          aria - pressed={theme === "system"}
        >;
          <Monitor className="h - 4 w - 4" />;
        </button>;
        <button;
<<<<<<< HEAD
<<<<<<< HEAD
          onClick={() => setTheme("dark")}

              ? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          on_click={() => set_theme ("dark")}
          className={`rounded px - 2 py - 1 text - sm transition - colors ${
            theme === "dark";
              ? "bg - zion - blue text - white";
              : "text - zinc - 400 hover:text - zinc - 100";
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
          onClick={() => setTheme("dark")}
<<<<<<< HEAD
          className={`rounded px-2 py-1 text-sm transition-colors ${theme === "dark";
=======
          className={`rounded px-2 py-1 text-sm transition-colors ${;
            theme === "dark";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              ? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }`}
          aria - label="Switch to dark theme";
          aria - pressed={theme === "dark"}
        >;
          <Moon className="h - 4 w - 4" />;
        </button>;
      </div>;
    </div>);
}