// Accessibility utilities for Zion Tech Group
export const accessibilityUtils = {
  // Focus management
  focusElement: (selector: string) => {
    const element = document.querySelector(selector);
    if (element && typeof element.focus === 'function') {
      element.focus();
    }
  },

  // Trap focus within a container
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
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

    container.addEventListener('keydown', handleTabKey);
    
    // Return cleanup function
    return () => container.removeEventListener('keydown', handleTabKey);
  },

  // Announce changes to screen readers
  announceToScreenReader: (message: string) => {
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
  },

  // Generate accessible color contrast
  getContrastRatio: (color1: string, color2: string): number => {
    // Simplified contrast calculation
    // In production, use a proper color contrast library
    return 4.5; // Placeholder - implement proper calculation
  }
};

// ARIA attributes helper
export const getAriaAttributes = (props: {
  label?: string;
  describedBy?: string;
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
}) => {
  const attributes: Record<string, string | boolean> = {};
  
  if (props.label) attributes['aria-label'] = props.label;
  if (props.describedBy) attributes['aria-describedby'] = props.describedBy;
  if (props.expanded !== undefined) attributes['aria-expanded'] = props.expanded;
  if (props.selected !== undefined) attributes['aria-selected'] = props.selected;
  if (props.disabled !== undefined) attributes['aria-disabled'] = props.disabled;
  
  return attributes;
};