"use client";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Monitor } from "lucide-react";
export function ThemeToggle() {const { theme, setTheme } = useTheme();"use client",;
import { useTheme } from "@/components/theme-provider",;
import { Moon, Sun, Monitor } from "lucide-react",;
export function ThemeToggle() {;
  const { theme, setTheme } = useTheme();
          className={`rounded px-2 py-1 text-sm transition-colors ${;
            theme === "light";

              ? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";
          on_click={() => set_theme ("dark")}
          className={`rounded px - 2 py - 1 text - sm transition - colors ${
            theme === "dark";
              ? "bg - zion - blue text - white";
              : "text - zinc - 400 hover:text - zinc - 100";
          onClick={() => setTheme("dark")}
          className={`rounded px-2 py-1 text-sm transition-colors ${theme === "dark";
          className={`rounded px-2 py-1 text-sm transition-colors ${;
            theme === "dark";
              ? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";