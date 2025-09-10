/**
 * Accessibility utilities and helpers
 */

// Focus management
export function trapFocus(element: HTMLElement) {
  const _focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>;
  
  const _firstElement = focusableElements[0];
  const _lastElement = focusableElements[focusableElements.length - 1];
  
  function handleTabKey(e: KeyboardEvent) {
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
  }
  
  element.addEventListener('keydown', handleTabKey);
  
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
}

// Announce messages to screen readers
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const _announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Skip link functionality
export function createSkipLink(targetId: string, text = 'Skip to main content') {
  const _skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 1000;
    transition: top 0.3s;
  `;
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px';
  });
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  
  return skipLink;
}

// High contrast mode detection
export function isHighContrastMode(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check for Windows High Contrast mode
  if (window.matchMedia('(-ms-high-contrast: active)').matches) {
    return true;
  }
  
  // Check for forced colors
  if (window.matchMedia('(forced-colors: active)').matches) {
    return true;
  }
  
  return false;
}

// Reduced motion detection
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Color contrast checker
export function getContrastRatio(color1: string, color2: string): number {
  const _getLuminance = (color: string): number => {
    const _rgb = color.match(/\d+/g);
    if (!rgb) return 0;
    
    const [r, g, b] = rgb.map(c => {
      const _val = parseInt(c) / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  
  const _lum1 = getLuminance(color1);
  const _lum2 = getLuminance(color2);
  const _brightest = Math.max(lum1, lum2);
  const _darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// Keyboard navigation helpers
export function handleKeyboardNavigation(
  event: KeyboardEvent,
  onEnter?: () => void,
  onEscape?: () => void,
  onArrowUp?: () => void,
  onArrowDown?: () => void,
  onArrowLeft?: () => void,
  onArrowRight?: () => void
) {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      onEnter?.();
      break;
    case 'Escape':
      event.preventDefault();
      onEscape?.();
      break;
    case 'ArrowUp':
      event.preventDefault();
      onArrowUp?.();
      break;
    case 'ArrowDown':
      event.preventDefault();
      onArrowDown?.();
      break;
    case 'ArrowLeft':
      event.preventDefault();
      onArrowLeft?.();
      break;
    case 'ArrowRight':
      event.preventDefault();
      onArrowRight?.();
      break;
  }
}

// ARIA live region management
export class LiveRegionManager {
  private regions: Map<string, HTMLElement> = new Map();
  
  createRegion(id: string, priority: 'polite' | 'assertive' = 'polite'): HTMLElement {
    if (this.regions.has(id)) {
      return this.regions.get(id)!;
    }
    
    const _region = document.createElement('div');
    region.id = id;
    region.setAttribute('aria-live', priority);
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    region.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    
    document.body.appendChild(region);
    this.regions.set(id, region);
    
    return region;
  }
  
  announce(id: string, message: string) {
    const _region = this.regions.get(id) || this.createRegion(id);
    region.textContent = message;
  }
  
  clear(id: string) {
    const _region = this.regions.get(id);
    if (region) {
      region.textContent = '';
    }
  }
  
  destroy() {
    this.regions.forEach(region => {
      if (region.parentNode) {
        region.parentNode.removeChild(region);
      }
    });
    this.regions.clear();
  }
}

// Focus visible polyfill for better keyboard navigation
export function initFocusVisible() {
  if (typeof window === 'undefined') return;
  
  let _hadKeyboardEvent = true;
  let keyboardThrottleTimeout: NodeJS.Timeout;
  
  function onPointerDown() {
    hadKeyboardEvent = false;
  }
  
  function onKeyDown(e: KeyboardEvent) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    hadKeyboardEvent = true;
  }
  
  function onFocus(e: FocusEvent) {
    if (hadKeyboardEvent) {
      (e.target as HTMLElement).classList.add('focus-visible');
    }
  }
  
  function onBlur(e: FocusEvent) {
    (e.target as HTMLElement).classList.remove('focus-visible');
  }
  
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);
  
  return () => {
    document.removeEventListener('keydown', onKeyDown, true);
    document.removeEventListener('mousedown', onPointerDown, true);
    document.removeEventListener('pointerdown', onPointerDown, true);
    document.removeEventListener('touchstart', onPointerDown, true);
    document.removeEventListener('focus', onFocus, true);
    document.removeEventListener('blur', onBlur, true);
  };
}