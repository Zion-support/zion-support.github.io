import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

interface AccessibilityState {
  isHighContrast: boolean;
  isReducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
  skipLinks: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [accessibilityState, setAccessibilityState] = useState<AccessibilityState>({
    isHighContrast: false,
    isReducedMotion: false,
    fontSize: 'medium',
    focusVisible: false,
    skipLinks: false
  });

  // Check for user preferences
  useEffect(() => {
    const checkPreferences = () => {
      // Check for high contrast preference
      const isHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      // Check for reduced motion preference
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check for color scheme preference
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      setAccessibilityState(prev => ({
        ...prev,
        isHighContrast,
        isReducedMotion
      }));

      // Apply high contrast styles
      if (isHighContrast) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }

      // Apply reduced motion styles
      if (isReducedMotion) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    checkPreferences();

    // Listen for changes in preferences
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => checkPreferences();

    highContrastQuery.addEventListener('change', handleChange);
    reducedMotionQuery.addEventListener('change', handleChange);
    colorSchemeQuery.addEventListener('change', handleChange);

    return () => {
      highContrastQuery.removeEventListener('change', handleChange);
      reducedMotionQuery.removeEventListener('change', handleChange);
      colorSchemeQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Toggle skip links visibility
      if (event.key === 'Tab' && !event.shiftKey) {
        setAccessibilityState(prev => ({ ...prev, skipLinks: true }));
      }
    };

    const handleClick = () => {
      setAccessibilityState(prev => ({ ...prev, skipLinks: false }));
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Handle focus management
  const handleFocus = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    if (target && target.matches('button, a, input, textarea, select, [tabindex]')) {
      setAccessibilityState(prev => ({ ...prev, focusVisible: true }));
    }
  }, []);

  const handleBlur = useCallback(() => {
    setAccessibilityState(prev => ({ ...prev, focusVisible: false }));
  }, []);

  useEffect(() => {
    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [handleFocus, handleBlur]);

  // Font size controls
  const increaseFontSize = useCallback(() => {
    setAccessibilityState(prev => {
      const newSize = prev.fontSize === 'small' ? 'medium' : 
                     prev.fontSize === 'medium' ? 'large' : 'large';
      document.documentElement.setAttribute('data-font-size', newSize);
      return { ...prev, fontSize: newSize };
    });
  }, []);

  const decreaseFontSize = useCallback(() => {
    setAccessibilityState(prev => {
      const newSize = prev.fontSize === 'large' ? 'medium' : 
                     prev.fontSize === 'medium' ? 'small' : 'small';
      document.documentElement.setAttribute('data-font-size', newSize);
      return { ...prev, fontSize: newSize };
    });
  }, []);

  // Announce page changes to screen readers
  const announcePageChange = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Expose accessibility functions globally
  useEffect(() => {
    (window as any).accessibilityControls = {
      increaseFontSize,
      decreaseFontSize,
      announcePageChange,
      state: accessibilityState
    };
  }, [increaseFontSize, decreaseFontSize, announcePageChange, accessibilityState]);

  return (
    <>
      {/* Skip Links */}
      {accessibilityState.skipLinks && (
        <div className="skip-links" role="navigation" aria-label="Skip navigation">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <a href="#services" className="skip-link">
            Skip to services
          </a>
          <a href="#contact" className="skip-link">
            Skip to contact
          </a>
        </div>
      )}

      {/* Accessibility Controls */}
      <div className="accessibility-controls" role="toolbar" aria-label="Accessibility controls">
        <button
          onClick={increaseFontSize}
          className="accessibility-btn"
          aria-label="Increase font size"
          title="Increase font size"
        >
          A+
        </button>
        <button
          onClick={decreaseFontSize}
          className="accessibility-btn"
          aria-label="Decrease font size"
          title="Decrease font size"
        >
          A-
        </button>
        <button
          onClick={() => {
            document.documentElement.classList.toggle('high-contrast');
            setAccessibilityState(prev => ({ 
              ...prev, 
              isHighContrast: !prev.isHighContrast 
            }));
          }}
          className="accessibility-btn"
          aria-label="Toggle high contrast"
          title="Toggle high contrast"
        >
          {accessibilityState.isHighContrast ? '🔆' : '🌓'}
        </button>
      </div>

      {/* Focus indicator */}
      <style>
        {`
          .focus-visible:focus {
            outline: 3px solid #667eea;
            outline-offset: 2px;
          }
          
          .high-contrast {
            --primary-color: #ffffff;
            --secondary-color: #000000;
            --accent-color: #ffff00;
            --text-color: #ffffff;
            --bg-color: #000000;
          }
          
          .reduced-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          [data-font-size="small"] {
            font-size: 0.875rem;
          }
          
          [data-font-size="large"] {
            font-size: 1.125rem;
          }
          
          .skip-links {
            position: absolute;
            top: -40px;
            left: 6px;
            z-index: 10000;
          }
          
          .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
          }
          
          .skip-link:focus {
            top: 6px;
          }
          
          .accessibility-controls {
            position: fixed;
            top: 20px;
            right: 20px;
            display: flex;
            gap: 8px;
            z-index: 1000;
          }
          
          .accessibility-btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
          }
          
          .accessibility-btn:hover {
            background: #5a6fd8;
          }
          
          .accessibility-btn:focus {
            outline: 2px solid #fff;
            outline-offset: 2px;
          }
        `}
      </style>

      {children}
    </>
  );
};

export default AccessibilityEnhancer;