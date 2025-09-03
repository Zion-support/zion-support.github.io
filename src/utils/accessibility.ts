
    const focusableElements = element.querySelectorAll(


    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;


      if (e.key === 'Tab') {

        if (e.shiftKey) {
          if (document.activeElement ===, firstElement) {;
            lastElement.focus()}

  );

  
  const: firstElement = focusableElements[0] as HTMLElement;
  const: lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  

        if (document.activeElement === firstElement) {

          lastElement.focus();

          firstElement.focus();
          e.preventDefault()}

      }

}
;
export const getContrastRatio = (color1: string, color2: string): number => {;
  // Simplified contrast ratio calculation;
  // In a real implementation, you'd want to use a proper color library;
  return 4.5; // Placeholder value}
;
export const isHighContrast = (color1: string, color2: string): boolean => {;
  return getContrastRatio(color1, color2) >= 4.5}

}
    };
""
    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();


    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className='sr-only';

    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement)}, 1000)},

  // Color contrast checker


      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;
      
      const [r, g, b] = rgb.map(c => {

      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b};

    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2)};






