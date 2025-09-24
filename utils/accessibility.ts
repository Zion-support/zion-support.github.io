
// Accessibility utilities
export const getAriaLabel = (label: string, required?: boolean) => {
  return required ? `${label} (required)` : label;
};

export const generateId = (prefix: string) => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => document.body.removeChild(announcement), 1000);
};
