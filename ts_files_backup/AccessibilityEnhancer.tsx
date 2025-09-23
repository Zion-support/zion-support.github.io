<<<<<<< HEAD
"use client";



const AccessibilityEnhancer: React.FC = () => {;
  useEffect(() => {;
    // Add skip link for keyboard navigation;
    const skipLink = document && document.createElement('a');
    skipLink && skipLink.href = '#main-content';
    skipLink && skipLink.textContent = 'Skip to main content',;
    skipLink && skipLink.className = 'sr-only focus: not-sr-only',;
    skipLink && skipLink.style.cssText = `;
      position: absolute, top: -40px,;
      left: 6px, background: #000,;
      color: #fff, padding: 8px,;
      text-decoration: none, z-index: 1000,;



    `;
    document && document.body.insertBefore(skipLink, document && document.body.firstChild);
    // Focus management;
    const handleMouseDown = () => {;
      document && document.body.classList && classList.add('using-mouse');
    };
    const handleKeyDown = (e: KeyboardEvent) => {;
      if (e && e.key === 'Tab') {;
        document && document.body.classList && classList.remove('using-mouse'),;
      }
    };
    document && document.addEventListener('mousedown', handleMouseDown);
    document && document.addEventListener('keydown', handleKeyDown);
    // Add ARIA live region for announcements;
    const liveRegion = document && document.createElement('div');
    liveRegion && liveRegion.setAttribute('aria-live', 'polite');
    liveRegion && liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion && liveRegion.className = 'sr-only';
    liveRegion && liveRegion.id = 'live-region';
    document && document.body.appendChild(liveRegion);
    // Announce page changes;
    const announcePageChange = (message: string) => {;
      const liveRegion = document && document.getElementById('live-region');
      if (liveRegion) {;
        liveRegion && liveRegion.textContent = message,;
      }
    };
    // Listen for route changes (Next && Next.js specific);
    const handleRouteChange = () => {;
      announcePageChange('Page loaded');
    };
    // Add route change listener if available;
    if (typeof window !== 'undefined' && window && window.history) {;
      const originalPushState = window && window.history.pushState;
      const originalReplaceState = window && window.history.replaceState;
      window && window.history.pushState = function(...args) {;
        originalPushState && originalPushState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };
      window && window.history.replaceState = function(...args) {;
        originalReplaceState && originalReplaceState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };
      window && window.addEventListener('popstate', handleRouteChange);
    }

    // Cleanup;
    return () => {;
      document && document.removeEventListener('mousedown', handleMouseDown);
      document && document.removeEventListener('keydown', handleKeyDown);
      if (skipLink && skipLink.parentNode) {;
        skipLink && skipLink.parentNode.removeChild(skipLink);

      }
      if (liveRegion && liveRegion.parentNode) {;
        liveRegion && liveRegion.parentNode.removeChild(liveRegion);
      }
    }
  }, []);
  return null;

import React, { useEffect } from 'react';
;
const AccessibilityEnhancer: React.FC = () => {
  useEffect (() => {
    // Add skip link for keyboard navigation;
    const skip_link = document.create_element ('a');
    skip_link.href = '#main - content';
    skip_link.text_content = 'Skip to main content',
    skip_link.class_name = 'sr - only focus: not - sr - only',
    skip_link.style.css_text = `;
      position: absolute, top: -40px,
      left: 6px, background: #000,
      color: #fff, padding: 8px,
      text - decoration: none, z - index: 1000,
    `;
    document.body.insert_before (skip_link, document.body.first_child);
;
    // Focus management;
    const handleMouseDown = () =>: any {
      document.body.class_list.add ('using - mouse');
    }
    const handleKeyDown = (e: KeyboardEvent) =>: any {
      // Check condition
if ( {) {
  $2
}
// Add CSS for focus management
const focusStyles = `
  .using-mouse *:focus {
    outline: none !important
  }
  .focus-visible:focus {
    outline: 2px solid #2563eb !important, outline-offset: 2px !important
  }
  .sr-only {
    position: absolute, width: 1px
    height: 1px, padding: 0
    margin: -1px, overflow: hidden
    clip: rect(0, 0, 0, 0);
    white-space: nowrap, border: 0
  }
  .sr-only.focus:not-sr-only:focus {
    position: static, width: auto
    height: auto, padding: inherit
    margin: inherit, overflow: visible
    clip: auto, white-space: normal
  }
`;
// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = focusStyles;
  document.head.appendChild(styleSheet);
}
export default AccessibilityEnhancer;
import React, { useEffect, useState } from 'react';
interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') |'normal';
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
  }, []);
  const applyAccessibilityStyles = (
    high_contrast: boolean,
    fontSizeValue: string,
    reducedMotionValue: boolean) =>: any {
    const root = document.document_element;
;
    // Check condition
if ( {) {
  $2
}
      root.class_list.add ('high - contrast');

    } else {
      root.class_list.remove ('high - contrast');
    }

    root.class_list.remove ('font - small', 'font - normal', 'font - large', 'font - extra - large');
    root.class_list.add (`font-${fontSizeValue}`);
;
    // Check condition
if ( {) {
  $2
}
      root.class_list.add ('reduced - motion');

    } else {
      root.class_list.remove ('reduced - motion');
    }
  }

};
// Add CSS for focus management;
const focusStyles = `;
  .using-mouse *:focus {;
    outline: none !important,;
  }
  .focus-visible:focus {;
    outline: 2px solid #2563eb !important, outline-offset: 2px !important,;
  }
  .sr-only {;
    position: absolute, width: 1px,;
    height: 1px, padding: 0,;
    margin: -1px, overflow: hidden,;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap, border: 0,;
  }
  .sr-only && only.focus:not-sr-only:focus {;
    position: static, width: auto,;
    height: auto, padding: inherit,;
    margin: inherit, overflow: visible,;
    clip: auto, white-space: normal,;
  }
`;
// Inject styles;
if (typeof document !== 'undefined') {;
  const styleSheet = document && document.createElement('style');
  styleSheet && styleSheet.textContent = focusStyles;
  document && document.head.appendChild(styleSheet);
}
export default AccessibilityEnhancer;
import React, { useEffect, useState } from 'react';
interface AccessibilityEnhancerProps {;
  children: React && React.ReactNode;
}
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {;
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {;
    const prefersReducedMotion = window && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);
    const savedHighContrast = localStorage && localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage && localStorage.getItem('fontSize') || 'normal';
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
  }, []);
  const applyAccessibilityStyles = (;
    highContrast: boolean,;
    fontSizeValue: string,;
    reducedMotionValue: boolean;
  ) => {;
    const root = document && document.documentElement;
    if (highContrast) {;
      root && root.classList.add('high-contrast');
    } else {;
      root && root.classList.remove('high-contrast');
    }
    root && root.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
    root && root.classList.add(`font-${fontSizeValue}`);
    if (reducedMotionValue) {;
      root && root.classList.add('reduced-motion');
    } else {;
      root && root.classList.remove('reduced-motion');
    }
  };
  const toggleHighContrast = () => {;

    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage && localStorage.setItem('highContrast', newValue && newValue.toString());
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);

  };
  const changeFontSize = (newSize: string) => {;

    setFontSize(newSize);
    localStorage && localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  }
  return (
    <>;
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">;
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Accessibility Options</h3>;
        <div className="space-y-2">;
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-1 text-xs rounded ${
              isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}>;
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast;
          </button>;
          <div className="text-xs text-gray-600 dark:text-gray-300">Font Size:</div>;
          <div className="flex gap-1">;
            {['small', 'normal', 'large', 'extra-large'].map((size) => (;
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${;
                  fontSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
                }`}
                aria-label={`Set font size to ${size}`}
              >;
                {size && size.charAt(0).toUpperCase()}
              </button>;
            ))}

          </div>
        </div>
      </div>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      {/* Screen reader only content */}
      <div className="sr-only">
        <h1>Zion Tech Group - Technology Solutions Provider</h1>
        <p>
          Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum
          computing, blockchain infrastructure, and innovative development services.
        </p>
      </div>
      {/* Main content */}
      <div id="main-content">{children}</div>
    </>
  );
}
export default AccessibilityEnhancer;
};


      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      {/* Screen reader only content */}
      <div className="sr-only">
        <h1>Zion Tech Group - Technology Solutions Provider</h1>
        <p>
          Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum
          computing, blockchain infrastructure, and innovative development services.
        </p>
      </div>
      {/* Main content */}
      <div id="main-content">{children}</div>
    </>
  );
export default AccessibilityEnhancer;

=======
import React, { useState, useEffect, useCallback, useRef, FocusEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Type, 
  Contrast, ZoomIn, ZoomOut, RotateCcw,
  Settings, X, Accessibility, Sun, Moon,
  Highlighter, TextCursor, AlignJustify
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highlighter: boolean;
  fontSize: number;
  lineSpacing: number;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highlighter: false,
    fontSize: 16,
    lineSpacing: 1.5,
    colorBlindMode: 'none'
  });
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  
  const focusRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Font size
    root.style.setProperty('--font-size', `${settings.fontSize}px`);
    
    // Line spacing
    root.style.setProperty('--line-spacing', settings.lineSpacing.toString());

    // Color blind modes
    if (settings.colorBlindMode !== 'none') {
      const filters = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      root.style.filter = filters[settings.colorBlindMode];
    } else {
      root.style.filter = 'none';
    }
  }, [settings]);

  // Handle click outside to close settings
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Text-to-speech functionality
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speechRate;
      utterance.onstart = () => setIsReading(true);
      utterance.onend = () => setIsReading(false);
      utterance.onerror = () => setIsReading(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
  };

  // Screen reader mode
  const toggleScreenReader = () => {
    if (isReading) {
      stopSpeaking();
    } else {
      // Get main content text
      const mainContent = document.querySelector('main');
      if (mainContent) {
        const text = mainContent.textContent || '';
        speakText(text.substring(0, 500) + '...'); // Limit text length
      }
    }
  }, [applySettings]);

  // Focus management
  const handleFocusChange = useCallback((e: FocusEvent<Element>) => {
    const target = e.target as HTMLElement;
    if (target) {
      setCurrentFocus(target);
      announceToScreenReader(`Focused on ${target.textContent || target.tagName.toLowerCase()}`);
    }
  }, []);

  // Keyboard navigation enhancements
  const handleKeyDown = useCallback((_e: any) => {
    // Tab navigation detected
  }, []);

  // Announce to screen reader
  const announceToScreenReader = useCallback((message: string) => {
    // setAnnouncements(prev => [...prev, message]); // This line was removed
    
    // Create live region for screen readers
    if (!announcementRef.current) {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
      announcementRef.current = liveRegion;
    }
    
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
    }
    
    // Remove announcement after a delay
    setTimeout(() => {
      // setAnnouncements(prev => prev.filter(a => a !== message)); // This line was removed
    }, 5000);
  }, []);

  // Auto-optimize accessibility
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip if target is an input, textarea, or select
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        return;
      }

      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation
          if (e.shiftKey) {
            // Shift+Tab: navigate backwards
            const focusableElements = getFocusableElements();
            const currentIndex = focusableElements.indexOf(target);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
            focusableElements[prevIndex]?.focus();
            e.preventDefault();
          }
          break;
          
        case 'Enter':
        case ' ':
          // Enter/Space: activate buttons and links
          if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.getAttribute('role') === 'button') {
            target.click();
            e.preventDefault();
          }
          break;
          
        case 'Escape': {
          // Escape: close modals and dropdowns
          const modals = document.querySelectorAll('[role="dialog"], [data-modal]');
          modals.forEach(modal => {
            if (modal.getAttribute('aria-hidden') === 'false') {
              const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
              if (closeButton instanceof HTMLElement) {
                closeButton.click();
              }
            }
          });
          break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Focus management
  useEffect(() => {
    const handleFocusIn = (e: Event) => {
      const target = e.target as HTMLElement;
      
      // Announce focus changes for screen readers
      if (settings.screenReader) {
        const label = target.getAttribute('aria-label') || 
                     target.getAttribute('title') || 
                     target.textContent?.trim();
        if (label) {
          announceToScreenReader(label);
        }
      }
      
      // Enhanced focus indicators
      if (settings.focusIndicators) {
        target.style.outline = '3px solid #3b82f6';
        target.style.outlineOffset = '2px';
      }
    };

    const handleFocusOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (settings.focusIndicators) {
        target.style.outline = '';
        target.style.outlineOffset = '';
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [settings.screenReader, settings.focusIndicators]);

  // Get all focusable elements
  const getFocusableElements = (): HTMLElement[] => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]',
      '[role="tab"]',
      '[role="menuitem"]'
    ];
    
    return Array.from(document.querySelectorAll(focusableSelectors.join(','))) as HTMLElement[];
  };

  // Highlighter mode
  const toggleHighlighter = () => {
    setSettings(prev => ({ ...prev, highlighter: !prev.highlighter }));
  };

  // Font size controls
  const increaseFontSize = () => {
    setSettings(prev => ({ ...prev, fontSize: Math.min(prev.fontSize + 2, 24) }));
  };

  const decreaseFontSize = () => {
    setSettings(prev => ({ ...prev, fontSize: Math.max(prev.fontSize - 2, 12) }));
  };

  // Line spacing controls
  const increaseLineSpacing = () => {
    setSettings(prev => ({ ...prev, lineSpacing: Math.min(prev.lineSpacing + 0.1, 2.5) }));
  };

  const decreaseLineSpacing = () => {
    setSettings(prev => ({ ...prev, lineSpacing: Math.max(prev.lineSpacing - 0.1, 1.0) }));
  };

  // Reset all settings
  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highlighter: false,
      fontSize: 16,
      lineSpacing: 1.5,
      colorBlindMode: 'none'
    });
  };

  return (
    <>
      {/* Accessibility Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300/50"
        aria-label="Accessibility options"
        aria-expanded={isVisible}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 z-50 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
            ref={settingsRef}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">Accessibility</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 space-y-3">
              {/* Screen Reader */}
              <button
                onClick={toggleScreenReader}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  isReading 
                    ? 'bg-red-500/20 border border-red-500/50 text-red-400' 
                    : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                aria-label={isReading ? 'Stop reading' : 'Start reading'}
              >
                <span className="flex items-center space-x-2">
                  {isReading ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isReading ? 'Stop Reading' : 'Screen Reader'}</span>
                </span>
              </button>

              {/* High Contrast Toggle */}
              <button
                onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  settings.highContrast 
                    ? 'bg-yellow-500/20 border border-yellow-500/50 text-yellow-400' 
                    : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                aria-label="Toggle high contrast"
              >
                <span className="flex items-center space-x-2">
                  <Contrast className="w-4 h-4" />
                  <span>High Contrast</span>
                </span>
                <div className={`w-4 h-4 rounded border-2 ${
                  settings.highContrast ? 'bg-yellow-400 border-yellow-400' : 'border-gray-500'
                }`} />
              </button>

              {/* Large Text Toggle */}
              <button
                onClick={() => setSettings(prev => ({ ...prev, largeText: !prev.largeText }))}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  settings.largeText 
                    ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400' 
                    : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                aria-label="Toggle large text"
              >
                <span className="flex items-center space-x-2">
                  <Type className="w-4 h-4" />
                  <span>Large Text</span>
                </span>
                <div className={`w-4 h-4 rounded border-2 ${
                  settings.largeText ? 'bg-blue-400 border-blue-400' : 'border-gray-500'
                }`} />
              </button>

              {/* Reduced Motion Toggle */}
              <button
                onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  settings.reducedMotion 
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                    : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                aria-label="Toggle reduced motion"
              >
                <span className="flex items-center space-x-2">
                  <EyeOff className="w-4 h-4" />
                  <span>Reduced Motion</span>
                </span>
                <div className={`w-4 h-4 rounded border-2 ${
                  settings.reducedMotion ? 'bg-green-400 border-green-400' : 'border-gray-500'
                }`} />
              </button>
            </div>

            {/* Settings Panel */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-700/50"
                >
                  <div className="p-4 space-y-4">
                    {/* Font Size Controls */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Font Size</h4>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={decreaseFontSize}
                          className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
                          aria-label="Decrease font size"
                        >
                          <ZoomOut className="w-4 h-4" />
                        </button>
                        <span className="text-white min-w-[3rem] text-center">{settings.fontSize}px</span>
                        <button
                          onClick={increaseFontSize}
                          className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
                          aria-label="Increase font size"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Line Spacing Controls */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Line Spacing</h4>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={decreaseLineSpacing}
                          className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
                          aria-label="Decrease line spacing"
                        >
                          <AlignJustify className="w-4 h-4" />
                        </button>
                        <span className="text-white min-w-[3rem] text-center">{settings.lineSpacing.toFixed(1)}</span>
                        <button
                          onClick={increaseLineSpacing}
                          className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
                          aria-label="Increase line spacing"
                        >
                          <AlignJustify className="w-4 h-4 rotate-90" />
                        </button>
                      </div>
                    </div>

                    {/* Color Blind Mode */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Color Blind Mode</h4>
                      <select
                        value={settings.colorBlindMode}
                        onChange={(e) => setSettings(prev => ({ ...prev, colorBlindMode: e.target.value as any }))}
                        className="w-full p-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="none">None</option>
                        <option value="protanopia">Protanopia (Red-Blind)</option>
                        <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                        <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                      </select>
                    </div>

                    {/* Speech Rate */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Speech Rate</h4>
                      <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={speechRate}
                        onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                        className="w-full"
                        aria-label="Speech rate"
                      />
                      <div className="text-xs text-gray-400 text-center">
                        {speechRate.toFixed(1)}x
                      </div>
                    </div>

                    {/* Reset Button */}
                    <button
                      onClick={resetSettings}
                      className="w-full p-3 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset All Settings</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render children with accessibility enhancements */}
      {children}
    </>
  );
};

// Skip Link Component
export const SkipLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
  >
    {children}
  </a>
);

// Screen Reader Only Text
export const SrOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

// Export the main provider component as default
export default AccessibilityProvider;
>>>>>>> origin/auto/autonomy-17186719616
