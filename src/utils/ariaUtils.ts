// Accessibility utilities
export const accessibilityUtils = {
  // Generate unique IDs for ARIA relationships
  generateId: (prefix = 'element') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },
  
  // Announce changes to screen readers
  announce: (message, priority = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  },
  
  // Keyboard navigation helpers
  handleKeyboardNavigation: (event, elements, currentIndex, onSelect) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % elements.length;
        onSelect(nextIndex);
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = currentIndex === 0 ? elements.length - 1 : currentIndex - 1;
        onSelect(prevIndex);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        onSelect(currentIndex);
        break;
    }
  }
};