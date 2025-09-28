/**
 * Advanced Keyboard Shortcuts System
 * Comprehensive keyboard shortcut management with context awareness and customization
 */

export interface KeyboardShortcut {
  id: string;
  key: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  metaKey?: boolean;
  description: string;
  category: string;
  action: () => void;
  context?: string[];
  enabled: boolean;
  global: boolean;
}

export interface KeyboardShortcutConfig {
  enableGlobalShortcuts: boolean;
  enableContextAwareness: boolean;
  enableCustomization: boolean;
  enableVisualFeedback: boolean;
  enableSoundFeedback: boolean;
  enableHapticFeedback: boolean;
  preventDefault: boolean;
  stopPropagation: boolean;
}

export class AdvancedKeyboardShortcuts {
  private shortcuts: Map<string, KeyboardShortcut> = new Map();
  private config: KeyboardShortcutConfig;
  private currentContext: string[] = [];
  private isEnabled: boolean = true;
  private listeners: Set<(shortcut: KeyboardShortcut) => void> = new Set();
  private keyHistory: string[] = [];
  private maxKeyHistory: number = 10;

  constructor(config: Partial<KeyboardShortcutConfig> = {}) {
    this.config = {
      enableGlobalShortcuts: true,
      enableContextAwareness: true,
      enableCustomization: true,
      enableVisualFeedback: true,
      enableSoundFeedback: false,
      enableHapticFeedback: false,
      preventDefault: true,
      stopPropagation: true,
      ...config,
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === "undefined") return;

    this.setupEventListeners();
    this.setupContextDetection();
    this.setupVisualFeedback();
  }

  private setupEventListeners(): void {
    document.addEventListener("keydown", this.handleKeyDown.bind(this), true);
    document.addEventListener("keyup", this.handleKeyUp.bind(this), true);
  }

  private setupContextDetection(): void {
    if (!this.config.enableContextAwareness) return;

    // Detect context based on active element
    document.addEventListener("focusin", (event) => {
      const element = event.target as HTMLElement;
      this.updateContext(element);
    });

    // Detect context based on URL changes
    window.addEventListener("popstate", () => {
      this.updateContextFromURL();
    });
  }

  private setupVisualFeedback(): void {
    if (!this.config.enableVisualFeedback) return;

    // Create visual feedback element
    const feedback = document.createElement("div");
    feedback.id = "keyboard-shortcut-feedback";
    feedback.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 14px;
      z-index: 10000;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    `;
    document.body.appendChild(feedback);
  }

  private updateContext(element: HTMLElement): void {
    const contexts: string[] = [];

    // Detect input contexts
    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      contexts.push("input");
    }

    // Detect modal contexts
    if (element.closest('[role="dialog"]') || element.closest(".modal")) {
      contexts.push("modal");
    }

    // Detect sidebar contexts
    if (element.closest(".sidebar") || element.closest("[data-sidebar]")) {
      contexts.push("sidebar");
    }

    // Detect dashboard contexts
    if (element.closest(".dashboard") || element.closest("[data-dashboard]")) {
      contexts.push("dashboard");
    }

    this.currentContext = contexts;
  }

  private updateContextFromURL(): void {
    const path = window.location.pathname;
    const contexts: string[] = [];

    if (path.includes("/dashboard")) contexts.push("dashboard");
    if (path.includes("/settings")) contexts.push("settings");
    if (path.includes("/admin")) contexts.push("admin");

    this.currentContext = [...this.currentContext, ...contexts];
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (!this.isEnabled) return;

    // Update key history
    this.updateKeyHistory(event.key);

    // Find matching shortcut
    const shortcut = this.findMatchingShortcut(event);
    if (!shortcut || !shortcut.enabled) return;

    // Check context awareness
    if (this.config.enableContextAwareness && shortcut.context) {
      const hasMatchingContext = shortcut.context.some((ctx) =>
        this.currentContext.includes(ctx),
      );
      if (!hasMatchingContext) return;
    }

    // Prevent default and stop propagation if configured
    if (this.config.preventDefault) {
      event.preventDefault();
    }
    if (this.config.stopPropagation) {
      event.stopPropagation();
    }

    // Execute shortcut action
    try {
      shortcut.action();
      this.notifyListeners(shortcut);
      this.showVisualFeedback(shortcut);
      this.playSoundFeedback();
      this.triggerHapticFeedback();
    } catch (error) {
      console.error("Error executing keyboard shortcut:", error);
    }
  }

  private handleKeyUp(): void {
    // Handle key up events if needed
  }

  private findMatchingShortcut(event: KeyboardEvent): KeyboardShortcut | null {
    for (const shortcut of this.shortcuts.values()) {
      if (this.matchesShortcut(event, shortcut)) {
        return shortcut;
      }
    }
    return null;
  }

  private matchesShortcut(
    event: KeyboardEvent,
    shortcut: KeyboardShortcut,
  ): boolean {
    return (
      event.key.toLowerCase() === shortcut.key.toLowerCase() &&
      !!event.ctrlKey === !!shortcut.ctrlKey &&
      !!event.shiftKey === !!shortcut.shiftKey &&
      !!event.altKey === !!shortcut.altKey &&
      !!event.metaKey === !!shortcut.metaKey
    );
  }

  private updateKeyHistory(key: string): void {
    this.keyHistory.push(key);
    if (this.keyHistory.length > this.maxKeyHistory) {
      this.keyHistory.shift();
    }
  }

  private showVisualFeedback(shortcut: KeyboardShortcut): void {
    if (!this.config.enableVisualFeedback) return;

    const feedback = document.getElementById("keyboard-shortcut-feedback");
    if (!feedback) return;

    const keys = [];
    if (shortcut.ctrlKey) keys.push("Ctrl");
    if (shortcut.shiftKey) keys.push("Shift");
    if (shortcut.altKey) keys.push("Alt");
    if (shortcut.metaKey) keys.push("Cmd");
    keys.push(shortcut.key);

    feedback.textContent = `${keys.join(" + ")}: ${shortcut.description}`;
    feedback.style.opacity = "1";

    setTimeout(() => {
      feedback.style.opacity = "0";
    }, 2000);
  }

  private playSoundFeedback(): void {
    if (!this.config.enableSoundFeedback) return;

    try {
      const audioContext = new (window.AudioContext ||
        (window as Window & { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.1,
      );

      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      console.warn("Could not play sound feedback:", error);
    }
  }

  private triggerHapticFeedback(): void {
    if (!this.config.enableHapticFeedback || !("vibrate" in navigator)) return;

    navigator.vibrate(50);
  }

  public addShortcut(shortcut: KeyboardShortcut): void {
    this.shortcuts.set(shortcut.id, shortcut);
  }

  public removeShortcut(id: string): void {
    this.shortcuts.delete(id);
  }

  public updateShortcut(id: string, updates: Partial<KeyboardShortcut>): void {
    const shortcut = this.shortcuts.get(id);
    if (shortcut) {
      Object.assign(shortcut, updates);
    }
  }

  public getShortcut(id: string): KeyboardShortcut | undefined {
    return this.shortcuts.get(id);
  }

  public getAllShortcuts(): KeyboardShortcut[] {
    return Array.from(this.shortcuts.values());
  }

  public getShortcutsByCategory(category: string): KeyboardShortcut[] {
    return Array.from(this.shortcuts.values()).filter(
      (s) => s.category === category,
    );
  }

  public getShortcutsByContext(context: string): KeyboardShortcut[] {
    return Array.from(this.shortcuts.values()).filter(
      (s) => !s.context || s.context.includes(context),
    );
  }

  public enableShortcut(id: string): void {
    const shortcut = this.shortcuts.get(id);
    if (shortcut) {
      shortcut.enabled = true;
    }
  }

  public disableShortcut(id: string): void {
    const shortcut = this.shortcuts.get(id);
    if (shortcut) {
      shortcut.enabled = false;
    }
  }

  public enableAllShortcuts(): void {
    this.shortcuts.forEach((shortcut) => {
      shortcut.enabled = true;
    });
  }

  public disableAllShortcuts(): void {
    this.shortcuts.forEach((shortcut) => {
      shortcut.enabled = false;
    });
  }

  public setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
  }

  public isShortcutEnabled(id: string): boolean {
    const shortcut = this.shortcuts.get(id);
    return shortcut ? shortcut.enabled : false;
  }

  public getCurrentContext(): string[] {
    return [...this.currentContext];
  }

  public setContext(context: string[]): void {
    this.currentContext = context;
  }

  public addContext(context: string): void {
    if (!this.currentContext.includes(context)) {
      this.currentContext.push(context);
    }
  }

  public removeContext(context: string): void {
    this.currentContext = this.currentContext.filter((c) => c !== context);
  }

  public getKeyHistory(): string[] {
    return [...this.keyHistory];
  }

  public clearKeyHistory(): void {
    this.keyHistory = [];
  }

  public addListener(
    listener: (shortcut: KeyboardShortcut) => void,
  ): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners(shortcut: KeyboardShortcut): void {
    this.listeners.forEach((listener) => {
      try {
        listener(shortcut);
      } catch (error) {
        console.error("Error in keyboard shortcut listener:", error);
      }
    });
  }

  public getConfig(): KeyboardShortcutConfig {
    return { ...this.config };
  }

  public updateConfig(newConfig: Partial<KeyboardShortcutConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  public exportShortcuts(): string {
    return JSON.stringify(Array.from(this.shortcuts.values()), null, 2);
  }

  public importShortcuts(shortcutsJson: string): void {
    try {
      const shortcuts = JSON.parse(shortcutsJson);
      shortcuts.forEach((shortcut: KeyboardShortcut) => {
        this.addShortcut(shortcut);
      });
    } catch (error) {
      console.error("Error importing shortcuts:", error);
    }
  }

  public resetToDefaults(): void {
    this.shortcuts.clear();
    this.setupDefaultShortcuts();
  }

  private setupDefaultShortcuts(): void {
    // This would be called to set up default shortcuts
    // Implementation depends on the specific application needs
  }

  public cleanup(): void {
    document.removeEventListener(
      "keydown",
      this.handleKeyDown.bind(this),
      true,
    );
    document.removeEventListener("keyup", this.handleKeyUp.bind(this), true);
    this.shortcuts.clear();
    this.listeners.clear();
    this.keyHistory = [];
  }
}

// Singleton instance
let keyboardShortcuts: AdvancedKeyboardShortcuts | null = null;

export function getKeyboardShortcuts(
  config?: Partial<KeyboardShortcutConfig>,
): AdvancedKeyboardShortcuts {
  if (!keyboardShortcuts) {
    keyboardShortcuts = new AdvancedKeyboardShortcuts(config);
  }
  return keyboardShortcuts;
}

// Convenience functions
export const shortcuts = {
  add: (shortcut: KeyboardShortcut) =>
    getKeyboardShortcuts().addShortcut(shortcut),
  remove: (id: string) => getKeyboardShortcuts().removeShortcut(id),
  enable: (id: string) => getKeyboardShortcuts().enableShortcut(id),
  disable: (id: string) => getKeyboardShortcuts().disableShortcut(id),
  getAll: () => getKeyboardShortcuts().getAllShortcuts(),
  getByCategory: (category: string) =>
    getKeyboardShortcuts().getShortcutsByCategory(category),
  getByContext: (context: string) =>
    getKeyboardShortcuts().getShortcutsByContext(context),
};
