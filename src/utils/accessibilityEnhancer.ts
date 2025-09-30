// Accessibility enhancer utility
export const accessibilityEnhancer = {
  initialize() {
    console.log('♿ Accessibility enhancer initialized');
    
    // Add keyboard navigation support
    document.addEventListener('keydown', this.handleKeyboardNavigation);
    
    // Add focus management
    this.manageFocus();
  },
  
  handleKeyboardNavigation(event: KeyboardEvent) {
    // Handle common keyboard shortcuts
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      this.focusSearch();
    }
  },
  
  focusSearch() {
    const searchInput = document.querySelector('input[type="search"], input[placeholder*="search" i]') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
    }
  },
  
  manageFocus() {
    // Ensure focus is visible
    document.body.style.outline = 'none';
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });
    
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }
};