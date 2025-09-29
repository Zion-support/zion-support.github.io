/**
 * Advanced Theme Manager
 * Comprehensive theme management with system detection and persistence
 */

import React from "react";

export interface ThemeConfig {
  defaultTheme: "light" | "dark" | "auto";
  enableSystemDetection: boolean;
  enablePersistence: boolean;
  enableSmoothTransitions: boolean;
  customThemes: Record<string, CustomTheme>;
}

export interface CustomTheme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    accent: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    mono: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
}

export type Theme = "light" | "dark" | "auto" | string;

export class ThemeManager {
  private config: ThemeConfig;
  private currentTheme: Theme;
  private systemTheme: "light" | "dark";
  private listeners: Set<(theme: Theme) => void> = new Set();
  private mediaQuery: MediaQueryList | null = null;

  constructor(config: Partial<ThemeConfig> = {}) {
    this.config = {
      defaultTheme: "auto",
      enableSystemDetection: true,
      enablePersistence: true,
      enableSmoothTransitions: true,
      customThemes: {},
      ...config,
    };

    this.systemTheme = this.detectSystemTheme();
    this.currentTheme = this.loadTheme();
    this.initialize();
  }

  private initialize(): void {
    if (typeof window === "undefined") return;

    this.setupSystemDetection();
    this.applyTheme(this.currentTheme);
    this.setupKeyboardShortcuts();
    this.injectCSSVariables();
  }

  private detectSystemTheme(): "light" | "dark" {
    if (typeof window === "undefined") return "light";

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  private loadTheme(): Theme {
    if (!this.config.enablePersistence || typeof window === "undefined") {
      return this.config.defaultTheme;
    }

    const saved = localStorage.getItem("theme");
    return saved || this.config.defaultTheme;
  }

  private saveTheme(theme: Theme): void {
    if (!this.config.enablePersistence || typeof window === "undefined") return;

    localStorage.setItem("theme", theme);
  }

  private setupSystemDetection(): void {
    if (!this.config.enableSystemDetection || typeof window === "undefined")
      return;

    this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    this.mediaQuery.addEventListener("change", (e) => {
      this.systemTheme = e.matches ? "dark" : "light";
      if (this.currentTheme === "auto") {
        this.applyTheme("auto");
      }
    });
  }

  private setupKeyboardShortcuts(): void {
    if (typeof window === "undefined") return;

    document.addEventListener("keydown", (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.shiftKey &&
        event.key === "T"
      ) {
        event.preventDefault();
        this.toggleTheme();
      }
    });
  }

  private injectCSSVariables(): void {
    if (typeof document === "undefined") return;

    const style = document.createElement("style");
    style.id = "theme-variables";
    style.textContent = `
      :root {
        --theme-transition: ${this.config.enableSmoothTransitions ? "all 0.3s ease-in-out" : "none"};
      }
      
      * {
        transition: var(--theme-transition);
      }
      
      .theme-transition {
        transition: var(--theme-transition);
      }
    `;

    document.head.appendChild(style);
  }

  public setTheme(theme: Theme): void {
    this.currentTheme = theme;
    this.saveTheme(theme);
    this.applyTheme(theme);
    this.notifyListeners(theme);
  }

  public getTheme(): Theme {
    return this.currentTheme;
  }

  public getEffectiveTheme(): "light" | "dark" {
    if (this.currentTheme === "auto") {
      return this.systemTheme;
    }
    return this.currentTheme as "light" | "dark";
  }

  public toggleTheme(): void {
    const current = this.getEffectiveTheme();
    const newTheme = current === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  }

  public cycleTheme(): void {
    const themes: Theme[] = ["light", "dark", "auto"];
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }

  private applyTheme(theme: Theme): void {
    if (typeof document === "undefined") return;

    const effectiveTheme =
      theme === "auto" ? this.systemTheme : (theme as "light" | "dark");
    const root = document.documentElement;

    // Remove existing theme classes
    root.classList.remove("light", "dark");

    // Add new theme class
    root.classList.add(effectiveTheme);

    // Apply custom theme if it exists
    if (this.config.customThemes[theme]) {
      this.applyCustomTheme(this.config.customThemes[theme]);
    } else {
      this.applyDefaultTheme(effectiveTheme);
    }

    // Update meta theme-color
    this.updateMetaThemeColor(effectiveTheme);
  }

  private applyDefaultTheme(theme: "light" | "dark"): void {
    const root = document.documentElement;

    const lightColors = {
      "--color-primary": "#3b82f6",
      "--color-secondary": "#6b7280",
      "--color-background": "#ffffff",
      "--color-surface": "#f9fafb",
      "--color-text": "#111827",
      "--color-text-secondary": "#6b7280",
      "--color-border": "#e5e7eb",
      "--color-accent": "#8b5cf6",
    };

    const darkColors = {
      "--color-primary": "#60a5fa",
      "--color-secondary": "#9ca3af",
      "--color-background": "#111827",
      "--color-surface": "#1f2937",
      "--color-text": "#f9fafb",
      "--color-text-secondary": "#d1d5db",
      "--color-border": "#374151",
      "--color-accent": "#a78bfa",
    };

    const colors = theme === "light" ? lightColors : darkColors;

    Object.entries(colors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }

  private applyCustomTheme(theme: CustomTheme): void {
    const root = document.documentElement;

    // Apply colors
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Apply fonts
    Object.entries(theme.fonts).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });

    // Apply spacing
    Object.entries(theme.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    // Apply border radius
    Object.entries(theme.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--border-radius-${key}`, value);
    });
  }

  private updateMetaThemeColor(theme: "light" | "dark"): void {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const color = theme === "light" ? "#ffffff" : "#111827";

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color);
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = color;
      document.head.appendChild(meta);
    }
  }

  public addCustomTheme(name: string, theme: CustomTheme): void {
    this.config.customThemes[name] = theme;
  }

  public removeCustomTheme(name: string): void {
    delete this.config.customThemes[name];
  }

  public getCustomThemes(): Record<string, CustomTheme> {
    return { ...this.config.customThemes };
  }

  public addListener(listener: (theme: Theme) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners(theme: Theme): void {
    this.listeners.forEach((listener) => {
      try {
        listener(theme);
      } catch (error) {
        console.error("Theme listener error:", error);
      }
    });
  }

  public getConfig(): ThemeConfig {
    return { ...this.config };
  }

  public updateConfig(newConfig: Partial<ThemeConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  public isSystemDark(): boolean {
    return this.systemTheme === "dark";
  }

  public getAvailableThemes(): Theme[] {
    return ["light", "dark", "auto", ...Object.keys(this.config.customThemes)];
  }

  public cleanup(): void {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener("change", () => {});
    }
    this.listeners.clear();
  }
}

// Singleton instance
let themeManager: ThemeManager | null = null;

export function getThemeManager(config?: Partial<ThemeConfig>): ThemeManager {
  if (!themeManager) {
    themeManager = new ThemeManager(config);
  }
  return themeManager;
}

// React hook for theme management
export function useTheme() {
  const [theme, setTheme] = React.useState<Theme>("auto");
  const [effectiveTheme, setEffectiveTheme] = React.useState<"light" | "dark">(
    "light",
  );

  React.useEffect(() => {
    const manager = getThemeManager();

    setTheme(manager.getTheme());
    setEffectiveTheme(manager.getEffectiveTheme());

    const unsubscribe = manager.addListener((newTheme) => {
      setTheme(newTheme);
      setEffectiveTheme(manager.getEffectiveTheme());
    });

    return unsubscribe;
  }, []);

  return {
    theme,
    effectiveTheme,
    setTheme: (newTheme: Theme) => getThemeManager().setTheme(newTheme),
    toggleTheme: () => getThemeManager().toggleTheme(),
    cycleTheme: () => getThemeManager().cycleTheme(),
    isSystemDark: () => getThemeManager().isSystemDark(),
    getAvailableThemes: () => getThemeManager().getAvailableThemes(),
  };
}
