// Accessibility utility functions

export const checkAriaLabels = $2;
export const checkFocusManagement = (element: HTMLElement): boolean => {
  return element.hasAttribute('tabindex') || element.tagName === 'BUTTON' || element.tagName === 'A'
}