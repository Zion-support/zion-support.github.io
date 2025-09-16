import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
;
interface AccessibilityState {;
  "highContrast": "boolean;
  "reducedMotion": boolean;
  "fontSize": 'small' | 'medium' | 'large';
  "focusVisible": boolean;
  "screenReader": boolean;
  "keyboardNavigation": boolean;
"}
interface AccessibilityConfig {;
  "enableHighContrast": "boolean;
  "enableReducedMotion": boolean;
  "enableFontSizeAdjustment": boolean;
  "enableFocusManagement": boolean;
  "enableScreenReaderSupport": boolean;
  "enableKeyboardNavigation": boolean;
"}
class AccessibilityManager {;
  private "config": "AccessibilityConfig = {;
    "enableHighContrast": true;
    "enableReducedMotion": true;
    "enableFontSizeAdjustment": true;
    "enableFocusManagement": true;
    "enableScreenReaderSupport": true;
    "enableKeyboardNavigation": true;
  "};
;
  private "state": "AccessibilityState = {;
    "highContrast": false;
    "reducedMotion": false;
    "fontSize": 'medium';
    "focusVisible": false;
    "screenReader": false;
    "keyboardNavigation": false;
  "};
;
  private "listeners": "Set<("state": AccessibilityState) => void> = new Set();
;
  constructor() {;
    this.initializeAccessibility();
  "}
  private initializeAccessibility(): "void {;
    if (typeof window === 'undefined') return;
;
    // Check for user preferences;
    this.checkUserPreferences();
    ;
    // Set up event listeners;
    this.setupEventListeners();
    ;
    // Apply initial styles;
    this.applyAccessibilityStyles();
  "}
  private checkUserPreferences(): "void {;
    // Check for reduced motion preference;
    if (window.matchMedia('(prefers-reduced-"motion": reduce)').matches) {;
      this.state.reducedMotion = true;
    "}
    // Check for high contrast preference;
    if (window.matchMedia('(prefers-"contrast": "high)').matches) {;
      this.state.highContrast = true;
    "}
    // Check for screen reader usage;
    this.state.screenReader = this.detectScreenReader();
;
    // Load saved preferences;
    this.loadSavedPreferences();
  }
  private detectScreenReader(): "boolean {;
    // Simple screen reader detection;
    return !!(;
      window.navigator.userAgent.includes('NVDA') ||;
      window.navigator.userAgent.includes('JAWS') ||;
      window.navigator.userAgent.includes('VoiceOver') ||;
      window.navigator.userAgent.includes('TalkBack');
    );
  "}
  private loadSavedPreferences(): "void {;
    try {;
      const saved = localStorage.getItem('accessibility_preferences');
      if (saved) {;
        const preferences = JSON.parse(saved);
        this.state = { ...this.state", ...preferences };
      }
    } catch (e) {;
    }
  }
  private savePreferences(): "void {;
    try {;
      localStorage.setItem('accessibility_preferences'", JSON.stringify(this.state));
    } catch (e) {;
    }
  }
  private setupEventListeners(): "void {;
    // Listen for keyboard navigation;
    document.addEventListener('keydown'", this.handleKeyDown);
    document.addEventListener('mousedown', this.handleMouseDown);
    ;
    // Listen for focus changes;
    document.addEventListener('focusin', this.handleFocusIn);
    document.addEventListener('focusout', this.handleFocusOut);
;
    // Listen for preference changes;
    window.matchMedia('(prefers-reduced-"motion": "reduce)').addEventListener('change'", this.handlePreferenceChange);
    window.matchMedia('(prefers-"contrast": "high)').addEventListener('change'", this.handlePreferenceChange);
  }
  private handleKeyDown = ("event": "KeyboardEvent): void => {;
    this.state.keyboardNavigation = true;
    this.notifyListeners();
;
    // Handle keyboard shortcuts;
    if (event.ctrlKey || event.metaKey) {;
      switch (event.key) {;
        case '=':;
        case '+':;
          event.preventDefault();
          this.increaseFontSize();
          break;
        case '-':;
          event.preventDefault();
          this.decreaseFontSize();
          break;
        case '0':;
          event.preventDefault();
          this.resetFontSize();
          break;
        case 'h':;
          event.preventDefault();
          this.toggleHighContrast();
          break;
      "}
    }
  };
;
  private handleMouseDown = (): "void => {;
    this.state.keyboardNavigation = false;
    this.notifyListeners();
  "};
;
  private handleFocusIn = ("event": "FocusEvent): void => {;
    if (this.state.keyboardNavigation) {;
      this.state.focusVisible = true;
      this.notifyListeners();
    "}
  };
;
  private handleFocusOut = (): "void => {;
    this.state.focusVisible = false;
    this.notifyListeners();
  "};
;
  private handlePreferenceChange = (): "void => {;
    this.checkUserPreferences();
    this.applyAccessibilityStyles();
    this.notifyListeners();
  "};
;
  private applyAccessibilityStyles(): "void {;
    const root = document.documentElement;
;
    // Apply high contrast;
    if (this.state.highContrast) {;
=======
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
=======

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  lineHeight: number;
  letterSpacing: number;
  keyboardNavigation: boolean;
  screenReader: boolean;
}
interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
}
export function AccessibilityEnhancer(props: any) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 1 6,
    highContrast: fals e,
    largeText: fals e,
    reducedMotion: fals e,
    highSaturation: fals e,
    lineHeight: 1.5,
    letterSpacing: 0,
    keyboardNavigation: tru e,
    screenReader: tru e
  }
    );
  const [isOpen, setIsOpen] = useState<any>(false);
  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    // Apply font size
    root.style.fontSize = `${settings.fontSize}px`;
    // Apply line height
    root.style.lineHeight = settings.lineHeight.toString();
    // Apply letter spacing
    root.style.letterSpacing = `${settings.letterSpacing}px`;

    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    "} else {;
      root.classList.remove('high-contrast');
    }

    // Apply large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Apply high contrast
    if (this.state.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

=======
    // Apply reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {;
      root.classList.remove('reduced-motion');
    }
    }
  }
  private notifyListeners(): "void {;
    this.listeners.forEach(listener => listener(this.state));
  // Public methods
  toggleHighContrast(): void {
  "}
  // Public methods;
  toggleHighContrast(): "void {;
    this.state.highContrast = !this.state.highContrast;
    this.applyAccessibilityStyles();
    this.savePreferences();
    this.notifyListeners();
  "}
  toggleReducedMotion(): "void {;
    this.state.reducedMotion = !this.state.reducedMotion;
    this.applyAccessibilityStyles();
    this.savePreferences();
    this.notifyListeners();
  "}
  setFontSize("size": 'small' | 'medium' | 'large'): "void {;
    this.state.fontSize = size;
    this.applyAccessibilityStyles();
    this.savePreferences();
    this.notifyListeners();
  "}
  increaseFontSize(): "void {;
    const sizes = ['small'", 'medium', 'large'];
    const currentIndex = sizes.indexOf(this.state.fontSize);
    if (currentIndex < sizes.length - 1) {;
      this.setFontSize(sizes[currentIndex + 1] as any);
    }
  }
  decreaseFontSize(): "void {;
    const sizes = ['small'", 'medium', 'large'];
    const currentIndex = sizes.indexOf(this.state.fontSize);
    if (currentIndex > 0) {;
      this.setFontSize(sizes[currentIndex - 1] as any);
    }
  }
  resetFontSize(): "void {;
    this.setFontSize('medium');
  "}
  getState(): "AccessibilityState {;
    return { ...this.state "};
  }
  subscribe("listener": "("state": AccessibilityState) => void): () => void {;
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  "}
  // Focus management;
  trapFocus("element": "HTMLElement): () => void {;
    const focusableElements = element.querySelectorAll(;
      'button", [href], input, select, textarea, [tabindex]: "not([tabindex="-1"])';
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
;
    const handleTabKey = ("e": KeyboardEvent) => {;
      if (e.key === 'Tab') {;
        if (e.shiftKey) {;
          if (document.activeElement === firstElement) {;
            lastElement.focus();
            e.preventDefault();
          "}
        } else {;
          if (document.activeElement === lastElement) {;
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
;
    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();
;
    return () => {;
      element.removeEventListener('keydown', handleTabKey);
    };
  }
  // Announce to screen readers;
  announce("message": "string", "priority": 'polite' | 'assertive' = 'polite'): "void {;
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live'", priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
;
    document.body.appendChild(announcement);
;
    setTimeout(() => {;
      document.body.removeChild(announcement);
    }, 1000);
  }
}
// Create singleton instance;
export const accessibilityManager = new AccessibilityManager();
;
// React hook for accessibility;
export const useAccessibility = () => {;
  const [state, setState] = useState<AccessibilityState>(accessibilityManager.getState());
;
  useEffect(() => {;
    const unsubscribe = accessibilityManager.subscribe(setState);
    return unsubscribe;
  }, []);
;
  const toggleHighContrast = useCallback(() => {;
    accessibilityManager.toggleHighContrast();
  }, []);
;
  const toggleReducedMotion = useCallback(() => {;
    accessibilityManager.toggleReducedMotion();
  }, []);
;
  const setFontSize = useCallback(("size": 'small' | 'medium' | 'large') => {;
    accessibilityManager.setFontSize(size);
  }, []);
;
  const increaseFontSize = useCallback(() => {;
    accessibilityManager.increaseFontSize();
  }, []);
;
  const decreaseFontSize = useCallback(() => {;
    accessibilityManager.decreaseFontSize();
  }, []);
;
  const resetFontSize = useCallback(() => {;
    accessibilityManager.resetFontSize();
  }, []);
;
  const announce = useCallback(("message": "string", priority?: 'polite' | 'assertive') => {;
    accessibilityManager.announce(message, priority);
  }, []);
;
  return {;
    ...state;
    toggleHighContrast;
    toggleReducedMotion;
    setFontSize;
    increaseFontSize;
    decreaseFontSize;
    resetFontSize;
    announce;
  };
};
;
// Accessibility Controls Component;
export const "AccessibilityControls": "React.FC = () => {;
  const {;
    highContrast;
    reducedMotion;
    fontSize;
    toggleHighContrast;
    toggleReducedMotion;
    setFontSize;
    increaseFontSize;
    decreaseFontSize;
    resetFontSize;
  "} = useAccessibility();
;
  return (;
    <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border">;
      <h3 className="text-sm font-semibold mb-3">Accessibility</h3>;
      ;
      <div className="space-y-3">;
        <label className="flex items-center space-x-2">;
          <input;
            type="checkbox";
            checked={highContrast}
            onChange={toggleHighContrast}
            className="rounded";
          />;
          <span className="text-sm">High Contrast</span>;
        </label>;
        <label className="flex items-center space-x-2">;
          <input;
            type="checkbox";
            checked={reducedMotion}
            onChange={toggleReducedMotion}
            className="rounded";
          />;
          <span className="text-sm">Reduce Motion</span>;
        </label>;
        <div className="space-y-2">;
          <span className="text-sm font-medium">Font Size</span>;
          <div className="flex space-x-1">;
            <button;
              onClick={decreaseFontSize}
              className="px-2 py-1 text-xs bg-gray-200 rounded "hover": "bg-gray-300";
              aria-label="Decrease font size";
            >;
              A-;
            </button>;
            <button;
              onClick={resetFontSize"}
              className="px-2 py-1 text-xs bg-gray-200 rounded "hover": "bg-gray-300";
              aria-label="Reset font size";
            >;
              A;
            </button>;
            <button;
              onClick={increaseFontSize"}
              className="px-2 py-1 text-xs bg-gray-200 rounded "hover": "bg-gray-300";
              aria-label="Increase font size";
            >;
              A+;
            </button>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
"};
;
export default AccessibilityManager;
    // Apply high saturation
    if (settings.highSaturation) {
      root.classList.add('high-saturation');
    } else {
      root.classList.remove('high-saturation');
    }
  }, [settings, enabled]);
  // Keyboard navigation support
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;
    const handleKeyDown = (props: any) => {
      const target = event.target as HTMLElement;
      // Tab navigation enhancement
      if (event.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        if (event.shiftKey && target === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && target === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, enabled]);
  // Screen reader announcements
  const announceToScreenReader = (props: any) => {
    };
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };
  // Add accessibility attributes to interactive elements
  useEffect(() => {
    if (!enabled) return;
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach((element) => {
      const el = element as HTMLElement;
      // Add focus indicators
      if (!el.hasAttribute('data-accessibility-enhanced')) {
        el.setAttribute('data-accessibility-enhanced', 'true');
        el.classList.add('focus-visible: outlin e-2', 'focus-visible: outlin e-blue-500', 'focus-visible: outlin e-offset-2');
      }
    }
    );
  }, [enabled]);
  const updateSetting = (props: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };
  if (!enabled) return null;
  return (
    <>
      {/* Accessibility Toggle Button */}
      {showSettings && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-4 left-16 z-50 p-3 bg-blue-500 hover: b g-blue-600 text-white rounded-full shadow-lg transition-all duration-200 hover: scal e-110 focus: outlin e-none focus: rin g-2 focus: rin g-blue-400 focus: rin g-offset-2"
          aria-label="Accessibility Settings"
          title="Accessibility Settings"
        >
          <AccessibilityIcon className="w-6 h-6"  />
        </button>
      )}
      {/* Accessibility Panel */}
      {isOpen && showSettings && (
        <div className="fixed bottom-20 left-4 z-40 w-80 bg-white dark: b g-gray-800 rounded-lg shadow-xl border border-gray-200 dark: borde r-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark: tex t-white">Accessibility
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover: tex t-gray-600 dark: hove r:text-gray-300"
            >
              ×
            </button>
          </div>
          <div className="space-y-4">
            {/* Font Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark: tex t-gray-300 mb-2">
                Font Size: {settings.fontSize}px
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateSetting('fontSize', Math.max(settings.fontSize - 2, 12))}
                  className="px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600"
                >
                  A-
                </button>
                <button
                  onClick={() => updateSetting('fontSize', Math.min(settings.fontSize + 2, 24))}
                  className="px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600"
                >
                  A+
                </button>
              </div>
            </div>
            {/* High Contrast */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSetting('highContrast', e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700 dark: tex t-gray-300">High Contrast</span>
              </label>
            </div>
            {/* Large Text */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => updateSetting('largeText', e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700 dark: tex t-gray-300">Large Text</span>
              </label>
            </div>
            {/* Reduced Motion */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700 dark: tex t-gray-300">Reduced Motion</span>
              </label>
            </div>
            {/* Keyboard Navigation */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.keyboardNavigation}
                  onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700 dark: tex t-gray-300">Enhanced Keyboard Navigation</span>
              </label>
            </div>
            {/* Screen Reader */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={(e) => updateSetting('screenReader', e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700 dark: tex t-gray-300">Screen Reader Support</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default AccessibilityEnhancer;
  }
}
// Create singleton instance
export const accessibilityManager = new AccessibilityManager();
// React hook for accessibility
export const useAccessibility = () => {
  const [state, setState] = useState<AccessibilityState>(accessibilityManager.getState());
  useEffect(() => {
    const unsubscribe = accessibilityManager.subscribe(setState);
    return unsubscribe;
  }, []);
  const toggleHighContrast = useCallback(() => {
    accessibilityManager.toggleHighContrast();
  }, []);
  const toggleReducedMotion = useCallback(() => {
    accessibilityManager.toggleReducedMotion();
  }, []);
  const setFontSize = useCallback((size: 'small' | 'medium' | 'large') => {
    accessibilityManager.setFontSize(size);
  }, []);
  const increaseFontSize = useCallback(() => {
    accessibilityManager.increaseFontSize();
  }, []);
  const decreaseFontSize = useCallback(() => {
    accessibilityManager.decreaseFontSize();
  }, []);
  const resetFontSize = useCallback(() => {
    accessibilityManager.resetFontSize();
  }, []);
  const announce = useCallback((message: string, priority?: 'polite' | 'assertive') => {
    accessibilityManager.announce(message, priority);
  }, []);
  return {
    ...state,
    toggleHighContrast,
    toggleReducedMotion,
    setFontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    announce,
  };
};
// Accessibility Controls Component
export const AccessibilityControls: React.FC = () => {
  const {
    highContrast,
    reducedMotion,
    fontSize,
    toggleHighContrast,
    toggleReducedMotion,
    setFontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
  } = useAccessibility();
  return (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border">
      <h3 className="text-sm font-semibold mb-3">Accessibility</h3>
      <div className="space-y-3">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={highContrast}
            onChange={toggleHighContrast}
            className="rounded"
          />
          <span className="text-sm">High Contrast</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={reducedMotion}
            onChange={toggleReducedMotion}
            className="rounded"
          />
          <span className="text-sm">Reduce Motion</span>
        </label>
        <div className="space-y-2">
          <span className="text-sm font-medium">Font Size</span>
          <div className="flex space-x-1">
            <button
              onClick={decreaseFontSize}
              className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <button
              onClick={resetFontSize}
              className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
              aria-label="Reset font size"
            >
              A
            </button>
            <button
              onClick={increaseFontSize}
              className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccessibilityManager;
=======
</any>
</AccessibilitySettings>
=======
import { useEffect } from 'react';,
import { useState } from 'react';,
import _React,{ useState,useEffect } from 'react'; import { Accessibility as AccessibilityIcon,Eye,Type,Volume2,Keyboard,Settings';'} from 'lucide-react'; interface AccessibilityState { highContrast: boolean; reducedMotion: boolean; fontSize: 'small' | 'medium' | 'large'; focusVisible: boolean; screenReader: boolean; keyboardNavigation: boolean} interface AccessibilityConfig { enableHighContrast: boolean; enableReducedMotion: boolean; enableFontSizeAdjustment: boolean; enableFocusManagement: boolean; enableScreenReaderSupport: boolean; enableKeyboardNavigation: boolean} class AccessibilityManager { private config: AccessibilityConfig = { enableHighContrast: true,enableReducedMotion: true,enableFontSizeAdjustment: true,enableFocusManagement: true,enableScreenReaderSupport: true,enableKeyboardNavigation: true,}; private state: AccessibilityState = { highContrast: false,reducedMotion: false,fontSize: 'medium,focusVisible: false,screenReader: false,keyboardNavigation: false,}; private listeners: Set<(state: AccessibilityState) => void> = new Set(); constructor() { this.initializeAccessibility()} private initializeAccessibility(): void { if (typeof window === 'undefined') return; this.checkUserPreferences(); this.setupEventListeners(); this.applyAccessibilityStyles()} private checkUserPreferences(): void { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { this.state.reducedMotion = true} if (window.matchMedia('(prefers-contrast: high)').matches) { this.state.highContrast = true} this.state.screenReader = this.detectScreenReader(); this.loadSavedPreferences()} private detectScreenReader(): boolean { return !!( window.navigator.userAgent.includes('NVDA') || window.navigator.userAgent.includes('JAWS') || window.navigator.userAgent.includes('VoiceOver') || window.navigator.userAgent.includes('TalkBack') )} private loadSavedPreferences(): void { try { const saved = localStorage.getItem('accessibility_preferences'); if (saved) { const preferences = JSON.parse(saved); this.state = { ...this.state,...preferences }} } catch (e) { } } private savePreferences(): void { try { localStorage.setItem('accessibility_preferences',JSON.stringify(this.state))} catch (e) { } } private setupEventListeners(): void { document.addEventListener('keydown',this.handleKeyDown); document.addEventListener('mousedown',this.handleMouseDown); document.addEventListener('focusin',this.handleFocusIn); document.addEventListener('focusout',this.handleFocusOut); window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change,this.handlePreferenceChange); window.matchMedia('(prefers-contrast: high)').addEventListener('change,this.handlePreferenceChange)} private handleKeyDown = (event: KeyboardEvent): void => { this.state.keyboardNavigation = true; this.notifyListeners(); if (event.ctrlKey || event.metaKey) { switch (event.key) { case '=': case '+': event.preventDefault(); this.increaseFontSize(); break; case '-': event.preventDefault(); this.decreaseFontSize(); break; case '0': event.preventDefault(); this.resetFontSize(); break; case 'h': event.preventDefault(); this.toggleHighContrast(); break} } }; private handleMouseDown = (): void => { this.state.keyboardNavigation = false; this.notifyListeners()}; private handleFocusIn = (event: FocusEvent): void => { if (this.state.keyboardNavigation) { this.state.focusVisible = true; this.notifyListeners()} }; private handleFocusOut = (): void => { this.state.focusVisible = false; this.notifyListeners()}; private handlePreferenceChange = (): void => { this.checkUserPreferences(); this.applyAccessibilityStyles(); this.notifyListeners()}; private applyAccessibilityStyles(): void { const root = document.documentElement; if (settings.highContrast) { root.classList.add('high-contrast');'} else { root.classList.remove('high-contrast')} if (settings.largeText) { root.classList.add('large-text');'} else { root.classList.remove('large-text')} if (settings.reducedMotion) { root.classList.add('reduced-motion');'} else { root.classList.remove('reduced-motion')} if (settings.highSaturation) { root.classList.add('high-saturation');'} else { root.classList.remove('high-saturation')} } private notifyListeners(): void { this.listeners.forEach(listener => listener(this.state))} const handleKeyDown = (props) => { const target = event.target as HTMLElement; '; if (event.key === 'Tab') { const focusableElements = document.querySelectorAll( 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; toggleReducedMotion(): void { this.state.reducedMotion = !this.state.reducedMotion; this.applyAccessibilityStyles(); this.savePreferences(); this.notifyListeners()} setFontSize(size: 'small' | 'medium' | 'large'): void { this.state.fontSize = size; this.applyAccessibilityStyles(); this.savePreferences(); this.notifyListeners()} increaseFontSize(): void { const sizes = ['small','medium','large']; const currentIndex = sizes.indexOf(this.state.fontSize); if (currentIndex < sizes.length - 1) { this.setFontSize(sizes[currentIndex + 1] as, any)} } decreaseFontSize(): void { const sizes = ['small','medium','large']; const currentIndex = sizes.indexOf(this.state.fontSize); if (currentIndex > 0) { this.setFontSize(sizes[currentIndex - 1] as, any)} } resetFontSize(): void { this.setFontSize('medium')} getState(): AccessibilityState { return { ...this.state }} subscribe(listener: (state: AccessibilityState) => void): () => void { this.listeners.add(listener); return () => this.listeners.delete(listener)} trapFocus(element: HTMLElement): () => void { const focusableElements = element.querySelectorAll( 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; const handleTabKey = (e: KeyboardEvent) => { if (e.key === 'Tab') { if (e.shiftKey) { if (document.activeElement === firstElement) { lastElement.focus(); e.preventDefault()} } else { if (document.activeElement === lastElement) { firstElement.focus(); e.preventDefault()} } } };'; document.addEventListener('keydown',handleKeyDown);';'; return () => document.removeEventListener('keydown',handleKeyDown)},[settings.keyboardNavigation,enabled]); const announceToScreenReader = (props) => { if (!settings.screenReader) return; const announcement = document.createElement('div'); announcement.setAttribute('aria-live','polite');';'; announcement.setAttribute('aria-atomic','true');';'; announcement.className = 'sr-only'; announcement.textContent = message; document.body.appendChild(announcement); setTimeout(() => { document.body.removeChild(announcement)},1000)}; useEffect(() => { if (!enabled) return;'; const interactiveElements = document.querySelectorAll('button,a,input,select,textarea'); interactiveElements.forEach((element) => { const el = element as HTMLElement; '; if (!el.hasAttribute('data-accessibility-enhanced')) { el.setAttribute('data-accessibility-enhanced','true');';'; el.classList.add('focus-visible: outlin e-2,'focus-visible: outlin e-blue-500,'focus-visible: outlin e-offset-2')} })},[enabled]); const updateSetting = (props) => { setSettings(prev => ({ ...prev,[key]: value };))}; if (!enabled) return null; return ( <> {} {showSettings && ( <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-4 left-16 z-50 p-3 bg-blue-500 hover: b g-blue-600 text-white rounded-full shadow-lg transition-all duration-200 hover: scal e-110 focus: outlin e-none focus: rin g-2 focus: rin g-blue-400 focus: rin g-offset-2" aria-label="Accessibility Settings" title="Accessibility Settings" > <AccessibilityIcon className="w-6 h-6" /> </button> )} {} {isOpen && showSettings && ( <div className="fixed bottom-20 left-4 z-40 w-80 bg-white dark: b g-gray-800 rounded-lg shadow-xl border border-gray-200 dark: borde r-gray-700 p-6"> <div className="flex items-center justify-between mb-4"> <h3 className="text-lg font-semibold text-gray-900 dark: tex t-white">Accessibility</h3> <button onClick={() => setIsOpen(false)} className="text-gray-400 hover: tex t-gray-600 dark: hove r:text-gray-300" > × </button> </div> <div className="space-y-4"> {} <div> <label className="block text-sm font-medium text-gray-700 dark: tex t-gray-300 mb-2"> Font Size: {settings.fontSize}px </label> <divclassName="flex items-center gap-2"> <button';'; onClick={() => updateSetting('fontSize',Math.max(settings.fontSize - 2,12))} className="px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600" > A- </button> <button';'; onClick={() => updateSetting('fontSize,Math.min(settings.fontSize + 2,24))} className="px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600" > A+ </button> </div> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.highContrast} onChange={(e) => updateSetting('highContrast',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">High Contrast</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.largeText} onChange={(e) => updateSetting('largeText',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">Large Text</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.reducedMotion} onChange={(e) => updateSetting('reducedMotion',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">Reduced Motion</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.keyboardNavigation} onChange={(e) => updateSetting('keyboardNavigation',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">Enhanced Keyboard Navigation</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.screenReader} onChange={(e) => updateSetting('screenReader',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">Screen Reader Support</span> </label> </div> </div> </div> )} </> )} export default AccessibilityEnhancer; </any> </AccessibilitySettings>;';';
