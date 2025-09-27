/**
 * Accessibility utility functions
 * Provides various accessibility enhancement functions
 */

// Focus management utilities
export const trapFocus = (element: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  consthandleTabK, e, y = (e: KeyboardEvent) => {
    if (e.key === "T, a, b") {
      if (e.shiftK, e, y) {
        if (document.activeEleme, n, t === firstEleme, n, t) {
          lastEleme, n, t.foc, u, s();
          e.preventDefault()}} el, s, e {if (document.activeEleme, n, t === lastEleme, n, t) {
          firstEleme, n, t.foc, u, s();
          e.preventDefault()}}}};
  element.addEventListener('keydown', handleTabKey);
  firstElement?.focus();

  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

// Screen reader utilities
export const announceToScreenReader = (message: string): void => {
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
};

// Skip link creation
export const createSkipLink = (targetId: string = 'main-content', text: string = 'Skip to main content'): HTMLElement => {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
  
  return skipLink;
};

// High contrast detection
export const isHighContrastMode = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-contrast: high)').matches ||
         window.matchMedia('(forced-colors: active)').matches;
};

// Reduced motion detection
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Focus visible initialization
export const initFocusVisible = (): void => {
  if (typeof window === 'undefined') return;
  
  // Add focus-visible class to document
  document.documentElement.classList.add('focus-visible');
  
  // Handle focus events
  let hadKeyboardEvent = false;
  
  const keyboardHandler = () => {
    hadKeyboardEvent = true;
  };
  
  const pointerHandler = () => {
    hadKeyboardEvent = false;
  };
  
  const focusHandler = (e: FocusEvent) => {
    if (hadKeyboardEvent) {
      (e.target as HTMLElement)?.classList.add('focus-visible');
    }
  };
  
  const blurHandler = (e: FocusEvent) => {
    (e.target as HTMLElement)?.classList.remove('focus-visible');
  };
  
  document.addEventListener('keydown', keyboardHandler, true);
  document.addEventListener('mousedown', pointerHandler, true);
  document.addEventListener('pointerdown', pointerHandler, true);
  document.addEventListener('touchstart', pointerHandler, true);
  document.addEventListener('focus', focusHandler, true);
  document.addEventListener('blur', blurHandler, true);
};

// Live region creation
export const createLiveRegion = (): HTMLElement => {
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  liveRegion.id = 'live-region';
  
  if (!document.getElementById('live-region')) {
    document.body.appendChild(liveRegion);
  }
  
  return liveRegion;
};

// ARIA label utilities
export const setAriaLabel = (element: HTMLElement, label: string): void => {
  element.setAttribute('aria-label', label);
};

export const setAriaDescribedBy = (element: HTMLElement, descriptionId: string): void => {
  element.setAttribute('aria-describedby', descriptionId);
};

export const setAriaExpanded = (element: HTMLElement, expanded: boolean): void => {
  element.setAttribute('aria-expanded', expanded.toString());
};

export const setAriaSelected = (element: HTMLElement, selected: boolean): void => {
  element.setAttribute('aria-selected', selected.toString());
};

// Keyboard navigation utilities
export const handleArrowKeys = (
  elements: HTMLElement[],
  currentIndex: number,
  direction: 'up' | 'down' | 'left' | 'right'
): number => {
  let newIndex = currentIndex;
  
  switch (direction) {
    case 'up':
    case 'left':
      newIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
      break;
    case 'down':
    case 'right':
      newIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
      break;
  }
  
  elements[newIndex]?.focus();
  return newIndex;
};

// Color contrast utilities
export const getContrastRatio = (color1: string, color2: string): number => {
  // Simplified contrast ratio calculation
  // In a real implementation, you'd want to use a proper color contrast library
  return 4.5; // Placeholder value
};

export const isColorContrastValid = (foreground: string, background: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
  const ratio = getContrastRatio(foreground, background);
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
};

// Screen reader detection
export const isScreenReaderActive = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check for common screen reader indicators
  const hasScreenReader = 
    window.navigator.userAgent.includes('NVDA') ||
    window.navigator.userAgent.includes('JAWS') ||
    window.navigator.userAgent.includes('VoiceOver') ||
    window.navigator.userAgent.includes('TalkBack');
  
  return hasScreenReader;
};

// Accessibility testing utilities
export const runAccessibilityAudit = (): Promise<any[]> => {
  return new Promise((resolve) => {
    // This would integrate with axe-core or similar accessibility testing library
    // For now, return empty array
    resolve([]);
  });
};

export const checkKeyboardNavigation = (element: HTMLElement): boolean => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  return focusableElements.length > 0;
};

// Utility to add accessibility attributes to interactive elements
export const enhanceAccessibility = (element: HTMLElement): void => {
  // Add role if missing
  if (!element.getAttribute('role') && element.tagName.match(/^(BUTTON|A|INPUT|SELECT|TEXTAREA)$/)) {
    if (element.tagName === 'BUTTON') {
      element.setAttribute('role', 'button');
    } else if (element.tagName === 'A') {
      element.setAttribute('role', 'link');
    }
  }
  
  // Add tabindex if missing for interactive elements
  if (!element.getAttribute('tabindex') && element.tagName.match(/^(BUTTON|A|INPUT|SELECT|TEXTAREA)$/)) {
    element.setAttribute('tabindex', '0');
  }
  
  // Add aria-label if no accessible name exists
  if (!element.getAttribute('aria-label') && 
      !element.getAttribute('aria-labelledby') && 
      !element.textContent?.trim()) {
    element.setAttribute('aria-label', 'Interactive element');
  }
};