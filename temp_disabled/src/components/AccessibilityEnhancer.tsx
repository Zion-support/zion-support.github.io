import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large'>(
    'normal'
  );
  const [reducedMotion, setReducedMotion] = useState(false);

  const applyAccessibilityStyles = (
    highContrast: boolean,
    fontSize: 'small' | 'normal' | 'large',
    reducedMotion: boolean
  ) => {
    const _root = document.documentElement;

    // Apply high contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply font size
    root.classList.remove('font-small', 'font-normal', 'font-large');
    root.classList.add(`font-${fontSize}`);

    // Apply reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  const toggleHighContrast = () => {
    const _newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);
  };

  const changeFontSize = (size: 'small' | 'normal' | 'large') => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    applyAccessibilityStyles(isHighContrast, size, reducedMotion);
  };

  useEffect(() => {
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    setReducedMotion(prefersReducedMotion);

    // Load saved preferences
//     const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize =
      (localStorage.getItem('fontSize') as 'small' | 'normal' | 'large') ||
      'normal';

    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);

    // Apply initial styles
    applyAccessibilityStyles(
      savedHighContrast,
      savedFontSize,
      prefersReducedMotion
    );

    // Add accessibility enhancements
    const addSkipLinks = () => {
//       const skipLinks = document.querySelector('.skip-links');
      if (!skipLinks) {
        const _skipLinksContainer = document.createElement('div');
        skipLinksContainer.className = 'skip-links';
        skipLinksContainer.innerHTML = `
          <a href="#main-content" class="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
            Skip to main content
          </a>
          <a href="#navigation" class="skip-link sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
            Skip to navigation
          </a>
        `;
        document.body.insertBefore(
          skipLinksContainer,
          document.body.firstChild
        );
      }
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const _main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }

      const _nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const _header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      const _footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators for keyboard navigation
      const _style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .sr-only.focus:not(.sr-only) {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }

        .font-small {
          font-size: 0.875rem;
        }

        .font-normal {
          font-size: 1rem;
        }

        .font-large {
          font-size: 1.125rem;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', e => {
        // Skip to main content with Alt + M
        if (e.altKey && e.key === 'm') {
          e.preventDefault();
          const main =
            document.querySelector('main') ||
            document.querySelector('#main-content');
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
          }
        }

        // Skip to navigation with Alt + N
        if (e.altKey && e.key === 'n') {
          e.preventDefault();
          const _nav = document.querySelector('nav');
          if (nav) {
            nav.focus();
            nav.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    };

    // Initialize accessibility enhancements
    addSkipLinks();
    addAriaLandmarks();
    enhanceFocusManagement();
    addKeyboardNavigation();

    // Add live region for announcements
    const addLiveRegion = () => {
      const _liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    };

    addLiveRegion();

    // Announce page changes
    const announcePageChange = () => {
      const _liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = 'Page content has loaded';
      }
    };

    // Announce after a short delay to ensure content is loaded
//     const timeoutId = setTimeout(announcePageChange, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {children}

      {/* Accessibility Controls - Only show in development */}
      {process.env['NODE_ENV'] === 'development' && (
        <div className='fixed top-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4'>
          <h3 className='text-sm font-semibold text-gray-900 mb-3'>
            Accessibility Controls
          </h3>

          <div className='space-y-3'>
            <div>
              <label className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  checked={isHighContrast}
                  onChange={toggleHighContrast}
                  className='rounded'
                />
                <span className='text-sm'>High Contrast</span>
              </label>
            </div>

            <div>
              <label className='text-sm text-gray-600 mb-1 block'>
                Font Size:
              </label>
              <div className='flex space-x-1'>
                {(['small', 'normal', 'large'] as const).map(size => (
                  <button
                    key={size}
                    onClick={() => changeFontSize(size)}
                    className={`px-2 py-1 text-xs rounded ${
                      fontSize === size
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    aria-label={`Set font size to ${size}`}
                  >
                    {size.charAt(0).toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityEnhancer;
