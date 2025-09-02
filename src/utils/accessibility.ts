// Accessibility utilities
export const focusElement = (selector: string) => {}
  const;const;const element = document.querySelector(selector);
  if (element) {
    (element as HTMLElement).focus()}
}

export const announceToScreenReader = (message: string) => {}
  const;const;const announcement = document.createElement(&apos;div&apos;);
  announcement.setAttribute(&apos;aria-live&apos;, &apos;polite&apos;);
  announcement.setAttribute(&apos;aria-atomic&apos;, &apos;true&apos;);
  announcement.className = &apos;sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement)}, 1000)}&apos;&apos;

export const trapFocus = (element: HTMLElement) => {}
  const;const;const focusableElements = element.querySelectorAll(
    &apos;button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])&apos;
  );&apos;
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === &apos;Tab&apos;) {
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
  
  element.addEventListener(&apos;keydown&apos;, handleTabKey);
  
  return () => {
    element.removeEventListener(&apos;keydown&apos;, handleTabKey)}
}&apos;

export const getContrastRatio = (color1: string, color2: string): number => {
  // Simplified contrast ratio calculation
  // In a real implementation, you&apos;d want to use a proper color library
  return 4.5; // Placeholder value
}&apos;

export const isHighContrast = (color1: string, color2: string): boolean => {
  return getContrastRatio(color1, color2) >= 4.5};