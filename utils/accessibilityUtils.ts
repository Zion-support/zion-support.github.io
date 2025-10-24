// Accessibility utility functions

export const checkAriaLabels = (element: HTMLElement): boolean => {
  const hasAriaLabel = element.hasAttribute('aria-label')
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby')
  const hasAriaDescribedBy = element.hasAttribute('aria-describedby')
  
  return hasAriaLabel || hasAriaLabelledBy || hasAriaDescribedBy
}

export const checkColorContrast = (foreground: string, background: string): boolean => {
  // Simple contrast check - in a real implementation, you'd use a proper contrast calculation
  return foreground !== background
}

export const checkKeyboardNavigation = (element: HTMLElement): boolean => {
  const tabIndex = element.getAttribute('tabindex')
  return tabIndex !== null && tabIndex !== '-1'
}

export const checkFocusManagement = (element: HTMLElement): boolean => {
  return element.hasAttribute('tabindex') || element.tagName === 'BUTTON' || element.tagName === 'A'
}

export const accessibilityUtils = {
  checkAriaLabels,
  checkColorContrast,
  checkKeyboardNavigation,
  checkFocusManagement
}