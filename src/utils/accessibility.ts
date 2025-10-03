export const accessibilityUtils = {
  // Add focus management
  focusFirstElement: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
  },

  // Add keyboard navigation
  handleKeyboardNavigation: (event: KeyboardEvent, elements: HTMLElement[]) => {
    const { key } = event;
    const currentIndex = elements.indexOf(document.activeElement as HTMLElement);
    
    if (key === 'ArrowDown' || key === 'ArrowRight') {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % elements.length;
      elements[nextIndex].focus();
    } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
      event.preventDefault();
      const prevIndex = currentIndex === 0 ? elements.length - 1 : currentIndex - 1;
      elements[prevIndex].focus();
    }
  },

  // Add ARIA labels
  generateAriaLabel: (text: string, type: string) => {
    return `${text} ${type}`;
  },

  // Check color contrast
  checkColorContrast: (foreground: string, background: string) => {
    // Basic contrast checking logic
    return true; // Simplified for demo
  }
};

export default accessibilityUtils;
