>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
<<<<<<< HEAD
          onClick={() => setTheme("dark")}
          className={`rounded px-2 py-1 text-sm transition-colors ${theme === "dark";
          className={`rounded px-2 py-1 text-sm transition-colors ${;
            theme === "dark";
              ? "bg-zion-blue text-white";
              : "text-zinc-400 hover:text-zinc-100";
=======
          }`}
          aria - label="Switch to dark theme";
          aria - pressed={theme === "dark"}
        >;
          <Moon className="h - 4 w - 4" />;
        </button>;
      </div>;
    </div>);
}