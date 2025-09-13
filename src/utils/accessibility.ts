// Accessibility utility functions

export const focusElement = (selector: string) => {
  const element = document.querySelector(selector) as HTMLElement;
  if (element) {
    element.focus();
  }
};

export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  );
  
  const firstFocusableElement = focusableElements[0] as HTMLElement;
  const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  });
};

export const addKeyboardNavigation = (container: HTMLElement) => {
  container.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        if (container.getAttribute('role') === 'button') {
          container.click();
        }
        break;
      case 'Escape':
        // Close modal or dropdown
        const closeEvent = new CustomEvent('close');
        container.dispatchEvent(closeEvent);
        break;
    }
  });
};

export const ensureColorContrast = (element: HTMLElement) => {
  const computedStyle = window.getComputedStyle(element);
  const backgroundColor = computedStyle.backgroundColor;
  const color = computedStyle.color;
  
  // Basic contrast check (simplified)
  const rgb1 = backgroundColor.match(/d+/g);
  const rgb2 = color.match(/d+/g);
  
  if (rgb1 && rgb2) {
    const brightness1 = (parseInt(rgb1[0]) * 299 + parseInt(rgb1[1]) * 587 + parseInt(rgb1[2]) * 114) / 1000;
    const brightness2 = (parseInt(rgb2[0]) * 299 + parseInt(rgb2[1]) * 587 + parseInt(rgb2[2]) * 114) / 1000;
    
    const contrast = Math.abs(brightness1 - brightness2);
    
    if (contrast < 125) {
      console.warn('Low color contrast detected:', element);
    }
  }
};
