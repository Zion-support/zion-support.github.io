
;
"use client",import { useTheme } from "@/components/theme-provider",import { Moon, Sun, Monitor } from "lucide-react",export function ThemeToggle() {const { theme, setTheme }  = useTheme()return (<div className="flex items-center gap-2">;
      <span className="sr-only">Theme</span>;
      <div className="flex rounded-lg border border-white/10 bg-zinc-900/50 p-1">;
        <button;
          onClick={() => setTheme("light")}className={`rounded px-2 py-1 text-sm transition-colors ${theme === "light";? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";"use client",import { use_theme  } from '@/components / theme - provider';,import { Moon, Sun, Monitor  } from './lucide-react';,export /**;
 * ThemeToggle - Function description;
 */;
function ThemeToggle() {const { theme, set_theme } = use_theme ()return (<div className="flex items - center gap-2">;
      <span className="sr-only">Theme</span>;
      <div className="flex rounded - lg border border - white / 10 bg - zinc - 900 / 50 p-1">;
          onClick={() => setTheme("light")}
"use client",
import { use_theme  } from '@/components / theme - provider';,
import { Moon, Sun, Monitor  } from './lucide-react';,
export /**
 * ThemeToggle - Function description
 */
function ThemeToggle() {
  const { theme, set_theme } = use_theme ();
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="flex items - center gap - 2">;
      <span className="sr - only">Theme</span>;
      <div className="flex rounded - lg border border - white / 10 bg - zinc - 900 / 50 p - 1">;
=======
    <div className="flex items - center gap-2">;
      <span className="sr-only">Theme</span>;
      <div className="flex rounded - lg border border - white / 10 bg - zinc - 900 / 50 p-1">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
    <div className="flex items - center gap - 2">;
      <span className="sr - only">Theme</span>;
      <div className="flex rounded - lg border border - white / 10 bg - zinc - 900 / 50 p - 1">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        <button;
          on_click={() => set_theme ("light")}
          className={`rounded px - 2 py - 1 text - sm transition - colors ${theme === "light";
              ? "bg - zion - blue text - white";
              : "text - zinc - 400 hover:text - zinc - 100";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (<div className="flex items-center gap-2">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
  return (<div className="flex items-center gap-2">;
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
"use client";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Monitor } from "lucide-react";
export function ThemeToggle() {const { theme, setTheme } = useTheme();
  return (;
<<<<<<< HEAD
=======
=======  return (;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    <div className="flex items-center gap-2">;
      <span className="sr-only">Theme</span>;
      <div className="flex rounded-lg border border-white/10 bg-zinc-900/50 p-1">;
        <button;
          onClick={() => setTheme("light")}
<<<<<<< HEAD
<<<<<<< HEAD
          className={`rounded px-2 py-1 text-sm transition-colors ${theme === "light";
              ? "bg-zion-blue text-white";
=======
          className={`rounded px-2 py-1 text-sm transition-colors ${theme === "light";              ? "bg-zion-blue text-white";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
          className={`rounded px-2 py-1 text-sm transition-colors ${theme === "light";
              ? "bg-zion-blue text-white";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
              : "text-zinc-400 hover:text-zinc-100";
          }`}
          aria - label="Switch to light theme";
          aria - pressed={theme === "light"}
        >;
<<<<<<< HEAD
<<<<<<< HEAD
          <Sun className="h - 4 w - 4" />;
=======
          <Sun className="h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
          <Sun className="h - 4 w - 4" />;
        </button>;
        <button;on_click={() => set_theme ("system")}
          className={`rounded px - 2 py - 1 text - sm transition - colors ${theme === "system";
              ? "bg - zion - blue text - white";
              : "text - zinc - 400 hover:text - zinc - 100";<Sun className="h - 4 w-4" />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        </button>;
        <button;on_click={() => set_theme ("system")}
          className={`rounded px - 2 py - 1 text - sm transition - colors ${theme === "system";
              ? "bg - zion - blue text - white";
              : "text - zinc - 400 hover:text - zinc - 100";<Sun className="h - 4 w-4" />;
        </button>;
        <button;
          }`}
          aria - label="Switch to system theme";
          aria - pressed={theme === "system"}
        >;
<<<<<<< HEAD
<<<<<<< HEAD
          <Monitor className="h - 4 w - 4" />;
=======
          <Monitor className="h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
          <Monitor className="h - 4 w - 4" />;
        </button>;
        <button;on_click={() => set_theme ("dark")}
          className={`rounded px - 2 py - 1 text - sm transition - colors ${theme === "dark";
              ? "bg - zion - blue text - white";
              : "text - zinc - 400 hover:text - zinc - 100";<Monitor className="h - 4 w-4" />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        </button>;
        <button;on_click={() => set_theme ("dark")}
          className={`rounded px - 2 py - 1 text - sm transition - colors ${theme === "dark";
              ? "bg - zion - blue text - white";
              : "text - zinc - 400 hover:text - zinc - 100";<Monitor className="h - 4 w-4" />;
        </button>;
        <button;
          }`}
          aria - label="Switch to dark theme";
          aria - pressed={theme === "dark"}
        >;
<<<<<<< HEAD
<<<<<<< HEAD
          <Moon className="h - 4 w - 4" />;
<<<<<<< HEAD
=======
=======
          <Moon className="h - 4 w - 4" />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          <Moon className="h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
          <Moon className="h - 4 w-4" />;
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
        </button>;
      </div>;
    </div>)}