import React, { useEffect, useState, useCallback } from 'react';

/**
 * Accessibility Enhancement Utilities
 * Comprehensive accessibility features for better user experience
 */

export interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large';
  contrast: 'normal' | 'high' | 'inverted';
  motion: 'normal' | 'reduced' | 'none';
  focus: 'visible' | 'enhanced' | 'always';
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlind: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

export interface AccessibilityFeatures {
  skipLinks: boolean;
  focusManagement: boolean;
  ariaLabels: boolean;
  keyboardShortcuts: boolean;
  screenReaderSupport: boolean;
  colorContrast: boolean;
  motionReduction: boolean;
  textScaling: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'medium',
  contrast: 'normal',
  motion: 'normal',
  focus: 'visible',
  screenReader: false,
  keyboardNavigation: true,
  colorBlind: 'normal'
};

// Accessibility Context
export const AccessibilityContext = React.createContext<{
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
  features: AccessibilityFeatures;
  announce: (message: string) => void;
}>({
  settings: defaultSettings,
  updateSettings: () => {},
  features: {
    skipLinks: true,
    focusManagement: true,
    ariaLabels: true,
    keyboardShortcuts: true,
    screenReaderSupport: true,
    colorContrast: true,
    motionReduction: true,
    textScaling: true
  },
  announce: () => {}
});

// Accessibility Provider
export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [features] = useState<AccessibilityFeatures>({
    skipLinks: true,
    focusManagement: true,
    ariaLabels: true,
    keyboardShortcuts: true,
    screenReaderSupport: true,
    colorContrast: true,
    motionReduction: true,
    textScaling: true
  });

  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem('accessibility-settings', JSON.stringify(updated));
      applyAccessibilitySettings(updated);
      return updated;
    });
  }, []);

  const announce = useCallback((message: string) => {
    // Create a live region for screen reader announcements
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  useEffect(() => {
    // Load saved settings
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsedSettings = JSON.parse(saved);
        setSettings(parsedSettings);
        applyAccessibilitySettings(parsedSettings);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }

    // Apply initial settings
    applyAccessibilitySettings(settings);
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ settings, updateSettings, features, announce }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// Apply accessibility settings to the document
const applyAccessibilitySettings = (settings: AccessibilitySettings): void => {
  const root = document.documentElement;
  
  // Font size
  const fontSizeMap = {
    small: '14px',
    medium: '16px',
    large: '18px'
  };
  root.style.fontSize = fontSizeMap[settings.fontSize];

  // Contrast
  if (settings.contrast === 'high') {
    root.classList.add('high-contrast');
  } else if (settings.contrast === 'inverted') {
    root.classList.add('inverted-colors');
  } else {
    root.classList.remove('high-contrast', 'inverted-colors');
  }

  // Motion
  if (settings.motion === 'reduced') {
    root.classList.add('reduced-motion');
  } else if (settings.motion === 'none') {
    root.classList.add('no-motion');
  } else {
    root.classList.remove('reduced-motion', 'no-motion');
  }

  // Focus
  if (settings.focus === 'enhanced') {
    root.classList.add('enhanced-focus');
  } else if (settings.focus === 'always') {
    root.classList.add('always-focus');
  } else {
    root.classList.remove('enhanced-focus', 'always-focus');
  }

  // Color blindness simulation
  if (settings.colorBlind !== 'normal') {
    root.classList.add(`colorblind-${settings.colorBlind}`);
  } else {
    root.classList.remove('colorblind-protanopia', 'colorblind-deuteranopia', 'colorblind-tritanopia');
  }
};

// Skip Links Component
export const SkipLinks: React.FC = () => (
  <div className="skip-links">
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    <a href="#navigation" className="skip-link">
      Skip to navigation
    </a>
    <a href="#footer" className="skip-link">
      Skip to footer
    </a>
  </div>
);

// Focus Management Hook
export const useFocusManagement = () => {
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null);

  const trapFocus = useCallback((container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const restoreFocus = useCallback(() => {
    if (focusedElement) {
      focusedElement.focus();
    }
  }, [focusedElement]);

  const saveFocus = useCallback(() => {
    setFocusedElement(document.activeElement as HTMLElement);
  }, []);

  return { trapFocus, restoreFocus, saveFocus };
};

// Keyboard Navigation Hook
export const useKeyboardNavigation = () => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Alt + M: Toggle main menu
    if (e.altKey && e.key === 'm') {
      e.preventDefault();
      const menuButton = document.querySelector('[aria-label="Main menu"]') as HTMLButtonElement;
      menuButton?.click();
    }

    // Alt + S: Skip to main content
    if (e.altKey && e.key === 's') {
      e.preventDefault();
      const mainContent = document.getElementById('main-content');
      mainContent?.focus();
    }

    // Alt + H: Go to home page
    if (e.altKey && e.key === 'h') {
      e.preventDefault();
      window.location.href = '/';
    }

    // Escape: Close modals/dropdowns
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])');
      if (activeModal) {
        const closeButton = activeModal.querySelector('[aria-label="Close"]') as HTMLButtonElement;
        closeButton?.click();
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
};

// ARIA Live Region Component
export const AriaLiveRegion: React.FC<{ message: string; priority?: 'polite' | 'assertive' }> = ({ 
  message, 
  priority = 'polite' 
}) => (
  <div 
    aria-live={priority} 
    aria-atomic="true" 
    className="sr-only"
  >
    {message}
  </div>
);

// Screen Reader Only Component
export const ScreenReaderOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

// Accessibility Checker
export const checkAccessibility = (): string[] => {
  const issues: string[] = [];

  // Check for missing alt attributes
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  if (imagesWithoutAlt.length > 0) {
    issues.push(`${imagesWithoutAlt.length} images are missing alt attributes`);
  }

  // Check for missing form labels
  const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby]):not([aria-describedby])');
  const inputsWithoutAssociatedLabels = Array.from(inputsWithoutLabels).filter(input => {
    const id = input.getAttribute('id');
    return !id || !document.querySelector(`label[for="${id}"]`);
  });
  if (inputsWithoutAssociatedLabels.length > 0) {
    issues.push(`${inputsWithoutAssociatedLabels.length} form inputs are missing labels`);
  }

  // Check for missing heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
  for (let i = 1; i < headingLevels.length; i++) {
    if (headingLevels[i] - headingLevels[i - 1] > 1) {
      issues.push('Heading hierarchy has gaps');
      break;
    }
  }

  // Check for color contrast (basic check)
  const elements = document.querySelectorAll('*');
  let lowContrastCount = 0;
  elements.forEach(element => {
    const styles = window.getComputedStyle(element);
    const color = styles.color;
    const backgroundColor = styles.backgroundColor;
    
    if (color && backgroundColor && color !== backgroundColor) {
      // Basic contrast check (simplified)
      const rgb1 = parseRgb(color);
      const rgb2 = parseRgb(backgroundColor);
      if (rgb1 && rgb2) {
        const contrast = calculateContrast(rgb1, rgb2);
        if (contrast < 4.5) {
          lowContrastCount++;
        }
      }
    }
  });
  
  if (lowContrastCount > 0) {
    issues.push(`${lowContrastCount} elements may have insufficient color contrast`);
  }

  return issues;
};

// Helper functions for contrast calculation
const parseRgb = (rgb: string): [number, number, number] | null => {
  const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) {
    return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
  }
  return null;
};

const calculateContrast = (rgb1: [number, number, number], rgb2: [number, number, number]): number => {
  const luminance1 = calculateLuminance(rgb1);
  const luminance2 = calculateLuminance(rgb2);
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  return (lighter + 0.05) / (darker + 0.05);
};

const calculateLuminance = (rgb: [number, number, number]): number => {
  const [r, g, b] = rgb.map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Accessibility Settings Panel Component
export const AccessibilitySettingsPanel: React.FC = () => {
  const { settings, updateSettings, announce } = React.useContext(AccessibilityContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSettingChange = (key: keyof AccessibilitySettings, value: any) => {
    updateSettings({ [key]: value });
    announce(`Accessibility setting ${key} changed to ${value}`);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="accessibility-toggle"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        ♿
      </button>
    );
  }

  return (
    <div className="accessibility-panel" role="dialog" aria-labelledby="accessibility-title">
      <h3 id="accessibility-title">Accessibility Settings</h3>
      
      <div className="setting-group">
        <label htmlFor="font-size">Font Size</label>
        <select
          id="font-size"
          value={settings.fontSize}
          onChange={(e) => handleSettingChange('fontSize', e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="setting-group">
        <label htmlFor="contrast">Contrast</label>
        <select
          id="contrast"
          value={settings.contrast}
          onChange={(e) => handleSettingChange('contrast', e.target.value)}
        >
          <option value="normal">Normal</option>
          <option value="high">High</option>
          <option value="inverted">Inverted</option>
        </select>
      </div>

      <div className="setting-group">
        <label htmlFor="motion">Motion</label>
        <select
          id="motion"
          value={settings.motion}
          onChange={(e) => handleSettingChange('motion', e.target.value)}
        >
          <option value="normal">Normal</option>
          <option value="reduced">Reduced</option>
          <option value="none">None</option>
        </select>
      </div>

      <div className="setting-group">
        <label htmlFor="color-blind">Color Blindness</label>
        <select
          id="color-blind"
          value={settings.colorBlind}
          onChange={(e) => handleSettingChange('colorBlind', e.target.value)}
        >
          <option value="normal">Normal</option>
          <option value="protanopia">Protanopia</option>
          <option value="deuteranopia">Deuteranopia</option>
          <option value="tritanopia">Tritanopia</option>
        </select>
      </div>

      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
};

export default {
  AccessibilityProvider,
  AccessibilityContext,
  SkipLinks,
  useFocusManagement,
  useKeyboardNavigation,
  AriaLiveRegion,
  ScreenReaderOnly,
  AccessibilitySettingsPanel,
  checkAccessibility
};