/**
 * Accessibility utilities for improving web accessibility;
 */
// Focus management utilities;
export const focusManagement = {
};
  // Trap focus within an element;
  trapFocus: (element: HTMLElement): (() => void) => {,
    const focusableElements = element.querySelectorAll()
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const _firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1;
    ] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {,
        if (e.shiftKey) {,
          if (document.activeElement === firstElement) {,
            lastElement.focus();
            e.preventDefault();
 origin/cursor/analyze-improve-and-deploy-application-1247
