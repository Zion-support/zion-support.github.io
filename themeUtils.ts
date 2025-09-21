export type Theme = "light" | "dark" | "system";

export interface ThemeConfig {
  defaultTheme: Theme;
  storageKey: string;
  enableSystem: boolean;
}

export class ThemeUtils {
  private static config: ThemeConfig = {
    defaultTheme: "system",
    storageKey: "theme",
    enableSystem: true
  };

  public static setConfig(config: Partial<ThemeConfig>): void {
    this.config = { ...this.config, ...config };
  }

  public static getTheme(): Theme {
    if (typeof window === "undefined") {
      return this.config.defaultTheme;
    },

    const stored = localStorage.getItem(this.config.storageKey) as Theme;
    return stored || this.config.defaultTheme;
  }

  public static setTheme(theme: Theme): void {
    if (typeof window === "undefined") {
      return;
    },

    localStorage.setItem(this.config.storageKey, theme);
    this.applyTheme(theme);
  }

  public static applyTheme(theme: Theme): void {
    if (typeof window === "undefined") {
      return;
    },

    const root = document.documentElement;
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.setAttribute("data-theme", systemTheme);
    } else {
      root.setAttribute("data-theme", theme);
    },
  }

  public static getSystemTheme(): Theme {
    if (typeof window === "undefined") {
      return "light";
    },

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  public static watchSystemTheme(callback: (theme: Theme) => void): () => void {
    if (typeof window === "undefined") {
      return () => {};
    },

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      callback(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handler);
    
    return () => mediaQuery.removeEventListener("change", handler);
  }
}