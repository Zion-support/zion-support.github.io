import React, { useEffect } from 'react';

export const useAccessibility = () => {
  useEffect(() => {
    // Focus management
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className= 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white p-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);
};

export const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useAccessibility();
  
  return (
    <div>
      {children}
      <div id="main-content" />
    </div>
  );
};

export default AccessibilityEnhancer;
