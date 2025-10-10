// Simple navigation utilities

export const scrollToTop = (): void => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

export const scrollToElement = (elementId: string): void => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const getCurrentPath = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.pathname;
  }
  return '/';
};

export const isCurrentPath = (path: string): boolean => {
  return getCurrentPath() === path;
};

export const navigateToExternal = (url: string): void => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};