// Accessibility utilities
export const focusElement = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    (element as HTMLElement).focus()}
}

export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');"
  announcement.setAttribute('aria-live', 'polite');"
  announcement.setAttribute('aria-atomic', 'true');"
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement)}, 1000)}

export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll("
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {"
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault()}
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault()}
      }
    }
  }
  "
  element.addEventListener('keydown', handleTabKey);
  
  return () => {"
    element.removeEventListener('keydown', handleTabKey)}
}

export const getContrastRatio = (color1: string, color2: string): number => {
  // Simplified contrast ratio calculation"
  // In a real implementation, you'd want to use a proper color library
  return 4.5; // Placeholder value,
}

export const isHighContrast = (color1: string, color2: string): boolean => {
  return getContrastRatio(color1, color2) >= 4.5}"