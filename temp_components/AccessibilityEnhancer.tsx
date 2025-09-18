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
  const settingsRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings to the document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Font size
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    
    // Line spacing
    root.style.setProperty('--line-spacing', newSettings.lineSpacing.toString());

    // Color blind modes
    if (newSettings.colorBlindMode !== 'none') {
      const filters = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      root.style.filter = filters[newSettings.colorBlindMode];
    } else {
      root.style.filter = 'none';
    }
  };

  useEffect(() => {
    applySettings(settings);
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
  };

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

const AccessibilityEnhancer: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AccessibilityEnhancer</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AccessibilityEnhancer;
