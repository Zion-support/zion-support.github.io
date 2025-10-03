// Advanced keyboard navigation
export const keyboardNavigation = {
  // Roving tabindex pattern
  createRovingTabindex: (container) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    // Set initial tabindex
    focusableElements.forEach((el, index) => {
      el.setAttribute('tabindex', index === 0 ? '0' : '-1');
      el.setAttribute('data-roving-index', index.toString());
    });
    
    // Handle focus events
    const handleFocus = (e) => {
      focusableElements.forEach(el => {
        el.setAttribute('tabindex', '-1');
      });
      e.target.setAttribute('tabindex', '0');
    };
    
    focusableElements.forEach(el => {
      el.addEventListener('focus', handleFocus);
    });
    
    return () => {
      focusableElements.forEach(el => {
        el.removeEventListener('focus', handleFocus);
      });
    };
  },
  
  // Arrow key navigation
  createArrowKeyNavigation: (container, options = {}) => {
    const {
      orientation = 'horizontal',
      loop = true,
      onSelect = () => {}
    } = options;
    
    const focusableElements = Array.from(container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ));
    
    let currentIndex = 0;
    
    const handleKeyDown = (e) => {
      const { key } = e;
      let nextIndex = currentIndex;
      
      if (orientation === 'horizontal') {
        if (key === 'ArrowLeft') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : (loop ? focusableElements.length - 1 : currentIndex);
        } else if (key === 'ArrowRight') {
          nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : (loop ? 0 : currentIndex);
        }
      } else {
        if (key === 'ArrowUp') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : (loop ? focusableElements.length - 1 : currentIndex);
        } else if (key === 'ArrowDown') {
          nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : (loop ? 0 : currentIndex);
        }
      }
      
      if (nextIndex !== currentIndex) {
        e.preventDefault();
        currentIndex = nextIndex;
        focusableElements[currentIndex].focus();
        onSelect(currentIndex);
      }
    };
    
    container.addEventListener('keydown', handleKeyDown);
    
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }
};