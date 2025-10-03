// Advanced screen reader optimizations
export const screenReaderOptimizations = {
  // Live region for dynamic content
  createLiveRegion: (type = 'polite') => {
    const region = document.createElement('div');
    region.setAttribute('aria-live', type);
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    document.body.appendChild(region);
    
    return {
      announce: (message) => {
        region.textContent = message;
      },
      remove: () => {
        document.body.removeChild(region);
      }
    };
  },
  
  // Skip links
  createSkipLinks: () => {
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];
    
    const container = document.createElement('div');
    container.className = 'skip-links';
    
    skipLinks.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      a.className = 'skip-link';
      container.appendChild(a);
    });
    
    document.body.insertBefore(container, document.body.firstChild);
  },
  
  // High contrast mode detection
  detectHighContrastMode: () => {
    return window.matchMedia('(prefers-contrast: high)').matches;
  },
  
  // Reduced motion detection
  detectReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
};