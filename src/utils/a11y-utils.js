
// Accessibility utilities
export const addAriaLabels = (element, label) => {
  if (element) {
    element.setAttribute('aria-label', label);
  }
};

export const addRole = (element, role) => {
  if (element) {
    element.setAttribute('role', role);
  }
};

export const addTabIndex = (element, index = 0) => {
  if (element) {
    element.setAttribute('tabindex', index);
  }
};

export const announceToScreenReader = (message) => {
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

export const checkColorContrast = (foreground, background) => {
  // Simple contrast ratio calculation
  const getLuminance = (color) => {
    const rgb = color.match(/\d+/g).map(Number);
    const [r, g, b] = rgb.map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  
  return {
    ratio: contrast,
    meetsAA: contrast >= 4.5,
    meetsAAA: contrast >= 7
  };
};
