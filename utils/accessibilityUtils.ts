// Accessibility utility functions
export const getAriaLabel = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, '-');
};

export const generateId = (prefix: string): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};