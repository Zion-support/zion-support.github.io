<<<<<<< HEAD
// Accessibility utilities;
export const focusElement = (selector: string) => {;
  const element = document.querySelector(selector);
  if (element) {;
    (element as HTMLElement).focus()}
}
;
export const announceToScreenReader = (message: string) => {;
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
=======
<<<<<<< HEAD
export const accessibilityUtils = {// Focus management
  trapFocus: (element: HTMLElement) => {
=======
<<<<<<< HEAD
// Accessibility utilities
export const focusElement = (selector: string) => {}
  const;const;const element = document.querySelector(selector);
  if (element) {
    (element as HTMLElement).focus()}
=======
export const accessibilityUtils = {
  // Focus management
<<<<<<< HEAD
  trapFocus: (elemen,
    t: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]);
=======
  trapFocus: (element:, HTMLElement) => {
>>>>>>> main
    const focusableElements = element.querySelectorAll(
<<<<<<< HEAD
      'button, [href], input, select, textarea, [tabindex]: not([tabindex="-1"])'
=======
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
>>>>>>> main
>>>>>>> main
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

<<<<<<< HEAD
    const handleTabKey = (e: KeyboardEvent) => {'
=======
<<<<<<< HEAD
    const handleTabKey = (e: KeyboardEvent) => {""
>>>>>>> main
      if (e.key === 'Tab') {
=======
    const handleTabKey = (e:, KeyboardEvent) => {"
      if (e.key ===, 'Tab') {
>>>>>>> main
        if (e.shiftKey) {
          if (document.activeElement ===, firstElement) {;
            lastElement.focus();
<<<<<<< HEAD
            e.preventDefault();
          }
        } else {if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
=======
<<<<<<< HEAD
            e.preventDefault();, }
=======
            e.preventDefault();,
>>>>>>> main
}
<<<<<<< HEAD

export const announceToScreenReader = (message: string) => {}
  const;const;const announcement = document.createElement(&apos;div&apos;);
  announcement.setAttribute(&apos;aria-live&apos;, &apos;polite&apos;);
  announcement.setAttribute(&apos;aria-atomic&apos;, &apos;true&apos;);
  announcement.className = &apos;sr-only';
>>>>>>> main
  announcement.textContent = message;
  ;
  document.body.appendChild(announcement);
<<<<<<< HEAD
  ;
  setTimeout(() => {;
    document.body.removeChild(announcement)}, 1000)}
;
export const trapFocus = (element: HTMLElement) => {;
  const focusableElements = element.querySelectorAll(;
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  );
  ;
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  ;
  const handleTabKey = (e: KeyboardEvent) => {;
    if (e.key === 'Tab') {;
      if (e.shiftKey) {;
        if (document.activeElement === firstElement) {;
=======
  
  setTimeout(() => {
    document.body.removeChild(announcement)}, 1000)}&apos;&apos;

<<<<<<< HEAD
export const trapFocus = (element: HTMLElement) => {}
  const;const;const focusableElements = element.querySelectorAll(
    &apos;button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])&apos;
  );&apos;
=======
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]: not([tabindex="-1"])'
  );
>>>>>>> main
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === &apos;Tab&apos;) {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
>>>>>>> main
          lastElement.focus();
          e.preventDefault()}
      } else {;
        if (document.activeElement === lastElement) {;
          firstElement.focus();
          e.preventDefault()}
>>>>>>> main
      }
<<<<<<< HEAD
    };
'
    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {'
      element.removeEventListener('keydown', handleTabKey);
=======
    }
  }
<<<<<<< HEAD
  ;
  element.addEventListener('keydown', handleTabKey);
  ;
  return () => {;
    element.removeEventListener('keydown', handleTabKey)}
}
;
export const getContrastRatio = (color1: string, color2: string): number => {;
  // Simplified contrast ratio calculation;
  // In a real implementation, you'd want to use a proper color library;
  return 4.5; // Placeholder value;
}
;
export const isHighContrast = (color1: string, color2: string): boolean => {;
  return getContrastRatio(color1, color2) >= 4.5}
=======
  
  element.addEventListener(&apos;keydown&apos;, handleTabKey);
  
  return () => {
    element.removeEventListener(&apos;keydown&apos;, handleTabKey)}
}&apos;

export const getContrastRatio = (color1: string, color2: string): number => {
  // Simplified contrast ratio calculation
<<<<<<< HEAD
  // In a real implementation, you&apos;d want to use a proper color library
  return 4.5; // Placeholder value
}&apos;

export const isHighContrast = (color1: string, color2: string): boolean => {
  return getContrastRatio(color1, color2) >= 4.5};
=======
  // In a real implementation, you&apos;d want to use a proper color library'
  return 4.5; // Placeholder value
=======
>>>>>>> main
        } else {
          if (document.activeElement ===, lastElement) {
            firstElement.focus();
            e.preventDefault();, }
        }
,
>>>>>>> main
}
    };
""
    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

<<<<<<< HEAD
    return () => {element.removeEventListener('keydown', handleTabKey);
>>>>>>> main
    };
  },

  // ARIA helpers
<<<<<<< HEAD
  announceToScreenReader: (messag,
    e: string) => {'
    const announcement = document.createElement('div');
=======
  announceToScreenReader: (message: string) => {const announcement = document.createElement('div');
>>>>>>> main
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className='sr-only';
=======
    return () => {""
      element.removeEventListener('keydown', handleTabKey);, };, },

  // ARIA helpers
<<<<<<< HEAD
  announceToScreenReader: (message: string) => {""
    const announcement = document.createElement('div');""
    announcement.setAttribute('aria-live', 'polite');""
    announcement.setAttribute('aria-atomic', 'true');""
=======
  announceToScreenReader: (message:, string) => {"
    const announcement = document.createElement('div');"
    announcement.setAttribute('aria-live,polite');"
    announcement.setAttribute('aria-atomic,true');"
>>>>>>> main
    announcement.className = 'sr-only';
>>>>>>> main
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);, }, 1000);, },

  // Color contrast checker
<<<<<<< HEAD
  getContrastRatio: (color,
    1: string, color2: string): number => {
    const getLuminance = (colo,
    r: string): number => {
=======
<<<<<<< HEAD
  getContrastRatio: (color1: string, color2: string): number => {const getLuminance = (color: string): number => {
=======
  getContrastRatio: (color1: string, color2: string): number => {
    const getLuminance = (color:, string): number => {;
>>>>>>> main
>>>>>>> main
      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;
      
      const [r, g, b] = rgb.map(c => {
<<<<<<< HEAD
        const val = parseInt(c) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);, });
=======
        const val =, parseInt(c) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val +, 0.055) / 1.055, 2.4);,
});
>>>>>>> main
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;, };

    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
<<<<<<< HEAD
    return (brightest + 0.05) / (darkest + 0.05);
  }
};
=======
<<<<<<< HEAD
    return (brightest + 0.05) / (darkest + 0.05);, }
=======
    return (brightest +, 0.05) / (darkest +, 0.05);,
}
>>>>>>> main
};

<<<<<<< HEAD
'
=======
""
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
