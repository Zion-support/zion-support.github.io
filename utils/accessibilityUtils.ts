// Accessibility utilities

export const accessibilityUtils = {
  checkAriaLabels: (element: HTMLElement) => {
    return element.hasAttribute('aria-label');
  },
  
  checkAltText: (img: HTMLImageElement) => {
    return img.hasAttribute('alt');
  }
};

export default accessibilityUtils;